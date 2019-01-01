import { Service, Context } from 'egg';
import sequelize = require('sequelize');

export default class TradeType extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx)

    this.model = ctx.model
  }

  async findList(filter) {
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filter);

    let sql = `
    SELECT tt.*, u.invite_code FROM trade_type tt LEFT JOIN user u ON u.id = tt.user_id
    `
    
    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { type: this.model.QueryTypes.SELECT });

    sql += ' LIMIT :offset, :limit';

    const list = await this.model.query(sql, {
      replacements: { offset, limit },
      type: this.model.QueryTypes.SELECT,
    });
    return {
      list,
      page: filter.page,
      pageSize: filter.pageSize,
      total: totals[0].c,
    };
  }

  async findMonthReport(filter) {
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filter);

    let sql = `
    SELECT temp.ymonth, SUM(IF(temp.trade_type=4, temp.price, 0)) income, SUM(IF(temp.trade_type<>4, temp.price, 0)) outcome FROM (
      SELECT DISTINCT tt.id, tt.price, tt.trade_type, DATE_FORMAT(tt.create_time,'%Y年%m月') ymonth FROM trade_type tt
    ) AS temp GROUP BY temp.ymonth
    `
    
    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { type: this.model.QueryTypes.SELECT });

    sql += ' LIMIT :offset, :limit';

    const list = await this.model.query(sql, {
      replacements: { offset, limit },
      type: this.model.QueryTypes.SELECT,
    });

    return {
      list,
      page: filter.page,
      pageSize: filter.pageSize,
      total: totals[0].c,
    };
  }

  async findSalaryList(filter) {
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filter);

    let sql = `
    SELECT tt.*, aly.apply_id_code apply_id_code, u.invite_code invite_code FROM trade_type tt 
    LEFT JOIN user u ON u.id = tt.user_id 
    LEFT JOIN apply aly ON aly.id = tt.apply_id
    WHERE tt.trade_type IN (2,3,5)
    `
    
    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { type: this.model.QueryTypes.SELECT });

    sql += ' LIMIT :offset, :limit';

    const list = await this.model.query(sql, {
      replacements: { offset, limit },
      type: this.model.QueryTypes.SELECT,
    });
    return {
      list,
      page: filter.page,
      pageSize: filter.pageSize,
      total: totals[0].c,
    };
  }

  async passSalary(id: number) {

    const founded = await this.model.TradeType.findOne({
      where: {
        id,
      },
    });

    if (!founded) {
      this.ctx.throw(404, 'not found this salary record');
      return
    }

    await this.model.TradeType.update({
      status: 2,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    };
  }

  async refuseSalary(id: number, msg: string) {
    const founded = await this.model.TradeType.findOne({
      where: {
        id,
      },
    });

    if (!founded) {
      this.ctx.throw(404, 'not found this salary record');
      return
    }

    await this.model.TradeType.update({
      status: 3,
      remark: msg,
      reject_reason: msg,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    };
  }
}