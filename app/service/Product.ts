import { Service, Context } from 'egg';
import sequelize = require('sequelize');
import moment = require('moment');
import { productAttribute } from '../entity/db';

export default class Product extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx)

    this.model = ctx.model
  }

  async findList(filters: any) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);

    let condition:any = {}

    if (filters.product_name) {
      condition.product_name = {
        [this.model.Op.like]: filters.product_name,
      }
    }

    if (filters.product_type) {
      condition.product_type = filters.product_type;
    }

    if (filters.bg_category) {
      condition.bg_category = {
        [this.model.Op.like]: filters.bg_category,
      }
    }

    if (filters.is_shelf) {
      condition.is_shelf = filters.is_shelf;
    }



    const reply = await this.model.Product.findAll({
      offset,
      limit,
      where: condition,
    });

    const total = await this.model.Product.count({
      where: condition,
    });

    return {
      list: reply,
      page: filters.page,
      pageSize: filters.pageSize,
      total,
    }
  }

  async create(product: productAttribute) {
    // this.model.Admin
    product.create_time = new Date();
    product.modify_time = new Date();

    const created = await this.model.Product.create(product);
    return {
      id: created.id,
      createdAt: moment(created.create_time).format(moment.defaultFormat),
    }
  }

  async update(id: number, fields: any) {
    fields.modify_time = new Date();
    await this.model.Product.update(fields, {
      where: {
        id,
      },
    });

    return {
      id,
    };
  }
}