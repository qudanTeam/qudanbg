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
    let where = '';

    console.log(filter);

    if (filter.start_time) {
      where += ` AND tt.create_time >= '${filter.start_time}'`;
    }

    if (filter.end_time) {
      where += ` AND tt.create_time <= '${filter.end_time}'`;
    }

    if (filter.trade_type && filter.trade_type > 0) {
      where += ` AND tt.trade_type = ${filter.trade_type}`;
    }

    if (filter.invite_code) {
      where += ` AND u.invite_code = '${filter.invite_code}'`;
    }

    let sql = `
    SELECT tt.*, u.invite_code 
    FROM trade_type tt 
    LEFT JOIN user u ON u.id = tt.user_id 
    WHERE tt.send_status = 2 ${where}
    `
    
    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { type: this.model.QueryTypes.SELECT });

    sql += ' ORDER BY create_time DESC';
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
      SELECT DISTINCT tt.id, tt.price, tt.trade_type, DATE_FORMAT(tt.create_time,'%Y年%m月') ymonth FROM trade_type tt WHERE tt.send_status = 2
    ) AS temp GROUP BY temp.ymonth
    `
    
    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { type: this.model.QueryTypes.SELECT });

    sql += ' ORDER BY temp.ymonth DESC';
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

    let where = '';

    console.log(filter);

    if (filter.start_time) {
      where += ` AND tt.create_time >= '${filter.start_time}'`;
    }

    if (filter.end_time) {
      where += ` AND tt.create_time <= '${filter.end_time}'`;
    }

    if (filter.trade_type && filter.trade_type > 0) {
      where += ` AND tt.trade_type = ${filter.trade_type}`;
    }

    if (filter.invite_code) {
      where += ` AND u.invite_code = '${filter.invite_code}'`;
    }

    if (filter.apply_id_code) {
      where += ` AND aly.apply_id_code = '${filter.apply_id_code}'`;
    }

    if (filter.status && filter.status > 0) {
      where += ` AND tt.status = '${filter.status}'`;
    }

    let sql = `
    SELECT 
      tt.*, 
      aly.apply_id_code apply_id_code, 
      prod.product_type product_type,
      u.invite_code invite_code,
      IFNULL(u.realname, u.username) realname
    FROM trade_type tt 
    LEFT JOIN user u ON u.id = tt.user_id 
    LEFT JOIN apply aly ON aly.id = tt.apply_id
    LEFT JOIN product prod ON prod.id = aly.product_id
    WHERE tt.trade_type IN (2,3,5) AND tt.price > 0 ${where}
    `
    
    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { type: this.model.QueryTypes.SELECT });

    sql += ' ORDER BY tt.create_time DESC';
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

  /**
   * 通过工资审核
   * @param id 
   */
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

    // 修改用户余额
    const account = await this.model.UserAccount.findOne({
      where: {
        user_id: founded.user_id,
      },
    });

    if (!account) {
      this.ctx.throw(404, '没有找到该用户账户');
      return;
    }

    const blance = Number((account.blance || 0)) + Number((founded.price || 0));
    const allow_tx = Number((account.allow_tx || 0)) + Number((founded.price || 0));
    console.log("工资结算 allow_tx:", allow_tx);
    console.log('工资结算 blance:', blance);
    await this.model.transaction(t => {
      return Promise.all([
        this.model.TradeType.update({
          status: 2,
          send_status: 2,
          audit_time: new Date(),
          send_time: new Date(),
        }, {
          where: {
            id,
          },
          transaction: t,
        }),
        this.model.UserAccount.update({
          allow_tx,
          blance,
        }, {
          where: {
            id: account.id,
          },
          transaction: t,
        }),
      ]);
    });

    return {
      id,
    };
  }

  /**
   * 拒绝工资结算
   * @param id 
   * @param msg 
   */
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

    // // 修改用户余额
    // const account = await this.model.UserAccount.findOne({
    //   where: {
    //     user_id: founded.user_id,
    //   },
    // });

    // if (!account) {
    //   this.ctx.throw(404, '没有找到该用户账户');
    //   return;
    // }

    // const blance = Number((account.blance || 0)) - Number((founded.price || 0));
    // const allow_tx = Number((account.allow_tx || 0)) - Number((founded.price || 0));

    // console.log(blance);
    // console.log(allow_tx, 'allow_tx')

    await this.model.TradeType.update({
      status: 3,
      send_status: 1,
      remark: msg,
      reject_reason: msg,
      audit_time: new Date(),
      // send_time: new Date(),
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    };
  }

  async findWithdrawList(filters) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);

    let where = '';

    if (filters.invite_code) {
      where += ` AND u.invite_code LIKE '%${filters.invite_code}%'`;
    }

    if (filters.register_mobile) {
      where += ` AND u.register_mobile LIKE '%${filters.register_mobile}%'`;
    }

    if (filters.status === 'pending') {
      where += ` AND tt.status = 1`;
    }


    if (filters.status === 'passed') {
      where += ` AND tt.status = 2`;
    }

    if (filters.status === 'refused') {
      where += ` AND tt.status = 3`;
    }

    if (filters.start_time) {
      where += ` AND tt.create_time >= '${filters.start_time}'`;
    }

    if (filters.end_time) {
      where += ` AND tt.create_time <= '${filters.end_time}'`;
    }

    let sql = `
    SELECT 
      tt.id, # 提现编号
      tt.trade_type, # 交易类型
      tt.apply_id, # 申请ID
      tt.price, # 提现金额
      tt.create_time, # 
      tt.modify_time,
      tt.status, # 审核状态
      tt.account, # 账户ID
      tt.reject_reason, # 拒绝理由
      tt.remark, # 备注
      tt.tx_name, # 提现姓名
      tt.user_id, # 用户ID
      tt.audit_time, # 审核时间
      tt.send_time, # 发放时间
      tt.send_status, # 发放状态
      tt.tx_alipay_no, # 体现支付宝账号
      u.register_mobile, # 手机号
      u.invite_code # 用户编号
    FROM trade_type tt 
    LEFT JOIN user u ON u.id = tt.user_id
    WHERE tt.trade_type = 1 ${where}
    `
    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { type: this.model.QueryTypes.SELECT });

    sql += ' ORDER BY modify_time DESC';
    sql += ' LIMIT :offset, :limit';

    const list = await this.model.query(sql, {
      replacements: { offset, limit },
      type: this.model.QueryTypes.SELECT,
    });

    return {
      list,
      page: filters.page,
      pageSize: filters.pageSize,
      total: totals[0].c,
    };
  }

  async passWithdraw(id: number) {

    const founded = await this.model.TradeType.findOne({
      where: {
        id,
      },
    });

    if (!founded) {
      this.ctx.throw(404, 'not found this salary record');
      return
    }

    // 修改用户余额
    const account = await this.model.UserAccount.findOne({
      where: {
        user_id: founded.user_id,
      },
    });

    if (!account) {
      this.ctx.throw(404, '没有找到该用户账户');
      return;
    }

    const blance = Number(account.blance || 0) - Number(founded.price || 0);
    const tx = Number(account.tx || 0) - Number(founded.price || 0);

    await this.model.transaction((t) => {
      return Promise.all([
        this.model.UserAccount.update({
          blance,
          tx,
        }, {
          where: {
            id: account.id,
          },
          transaction: t,
        }),
        this.model.TradeType.update({
          status: 2,
          // send_status: 2,
          audit_time: new Date(),
        }, {
          where: {
            id,
          },
          transaction: t,
        }),
      ])
    });

    return {
      id,
    };
  }

  async refuseWithdraw(id: number, msg: string) {
    const founded = await this.model.TradeType.findOne({
      where: {
        id,
      },
    });

    if (!founded) {
      this.ctx.throw(404, 'not found this salary record');
      return
    }

    // 修改用户余额
    const account = await this.model.UserAccount.findOne({
      where: {
        user_id: founded.user_id,
      },
    });

    if (!account) {
      this.ctx.throw(404, '没有找到该用户账户');
      return;
    }
    let blance = Number(account.blance || 0) + Number(founded.price || 0);
    let allow_tx = Number(account.allow_tx || 0) + Number(founded.price || 0);
    const tx = Number(account.tx || 0) - Number(founded.price || 0);
    if (tx <= 0) {
      blance = Number(account.blance || 0) + Number(account.tx || 0);
      allow_tx = Number(account.allow_tx || 0) + Number(account.tx || 0);
    }

    console.log(blance);
    

    await this.model.TradeType.update({
      status: 3,
      remark: msg,
      reject_reason: msg,
      audit_time: new Date(),
    }, {
      where: {
        id,
      }
    });

    await this.model.transaction((t) => {
      return Promise.all([
        this.model.UserAccount.update({
          // blance,
          allow_tx,
          tx,
        }, {
          where: {
            id: account.id,
          },
          transaction: t,
        }),
        this.model.TradeType.update({
          status: 3,
          remark: msg,
          reject_reason: msg,
          audit_time: new Date(),
        }, {
          where: {
            id,
          },
          transaction: t,
        }),
      ])
    });

    return {
      id,
    };
  }

  async finishedWithdraw(id: number) {
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
      send_status: 2,
      send_time: new Date(),
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