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

    if (filters.status) {
      condition['status'] = filters.status
    }

    if (filters.product_type) {
      condition['product_type'] = filters.product_type
    }

    const reply = await this.model.OrderView.findAll({
      offset,
      limit,
      where: condition,
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

  async passOne(id: number) {
    // await this.model
    await this.model.Apply.update({
      status: 2,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    }
  }

  async refuseOne(id: number) {
    await this.model.Apply.update({
      status: 3,
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