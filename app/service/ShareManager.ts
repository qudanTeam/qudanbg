import { Service, Context } from 'egg';
import sequelize = require('sequelize');

export default class ShareManager extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx);
    this.model = ctx.model;
  }

  async findList(filter) {
    // const { page, pageSize } = filter;
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filter);

    let sql = `
    select sm.*, p.product_name from share_manager sm 
    left join product p on p.id = sm.product_id where 1=1
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

  async create(body) {
    const createdShare = await this.model.ShareManager.create(body);

    return {
      id: createdShare.id,
    }
  }

  async update(id: number, body) {
    if ((await this.model.ShareManager.count({where: {id}})) <= 0) {
      this.ctx.throw(404, 'not found this config');
      return
    }

    await this.model.ShareManager.update(body, {
      where: {
        id,
      }
    });

    return {
      id,
    };
  }

  async deleteById(id: number) {
    const foundConfig = await this.model.ShareManager.findOne({
      where: {
        id,
      }
    });

    if (!foundConfig) {
      this.ctx.throw(404, 'not found this config');
      return
    }

    await this.model.ShareManager.destroy({where: {id}});

    return true;
  }
}