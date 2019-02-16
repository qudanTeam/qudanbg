import { Service, Context } from 'egg';
import sequelize = require('sequelize');

export default class Order extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx)

    this.model = ctx.model
  }

  async findList(filters: any) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);

    const condition = {}

    if (filters.order_no) {
      condition['apply_id_code'] = {
        [this.model.Op.like]: `%${filters.order_no}%`
      }
    }

    if (filters.product_name) {
      condition['product_name'] = filters.product_name;
    }

    if (filters.user_id) {
      condition['user_id'] = filters.user_id;
    }

    if (filters.invite_code) {
      condition['invite_code'] = filters.invite_code;
    }

    if (filters.status) {
      condition['status'] = filters.status
    }

    if (filters.product_type) {
      condition['product_type'] = filters.product_type
    }

    if (filters.start_time && filters.end_time) {
      condition['create_time'] = {
        [this.model.Op.gte]: `${filters.start_time}`,
        [this.model.Op.lte]: `${filters.end_time}`,
      }
    }

    const reply = await this.model.OrderView.findAll({
      offset,
      limit,
      where: condition,
      order: [
        ['create_time', 'DESC'],
      ]
    });

    const total = await this.model.OrderView.count({
      where: condition,
    });

    return {
      list: reply,
      page: filters.page,
      pageSize: filters.pageSize,
      total,
    }
  }

  async returnDeposit(id: number) {
    await this.model.PosApplyExt.update({
      deposit_status: 3,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    }
  }

  async passOne(id: number, others: any) {

    const { ctx, config } = this;

    // await this.model
    await this.model.Apply.update({
      modify_time: new Date(),
      status: 2,
      official_status: 2,
      loan_expire: others.loan_expire,
      loan_money: others.loan_money,
      card_money: others.card_money,
      official_expire: others.loan_expire,
      official_limit: others.loan_money,
      official_time: new Date(),
    }, {
      where: {
        id,
      }
    });

    const resp = await ctx.curl(`${config.javaAPI}/settle/trigger?applyid=${id}`, {
      dataType: 'json',
    });

    if (resp.status !== 200) {
      ctx.throw(400, '远端接口服务出现问题，请稍后再试');
      // await this.model
      await this.model.Apply.update({
        modify_time: new Date(),
        status: 1,
        official_status: 1,
      }, {
        where: {
          id,
        }
      });
      return;
    }

    

    return {
      id,
    }
  }

  async refuseOne(id: number) {

    await this.model.Apply.update({
      modify_time: new Date(),
      status: 3,
      official_status: 3,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    }
  }

  async details(id: number) {
    const found = await this.model.OrderView.findOne({
      where: {
        id,
      },
    });

    return found;
  }
}