import { Service, Context } from 'egg';
import sequelize = require('sequelize');
import moment = require('moment');
import { categoryAttribute } from '../entity/db';

export default class Category extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx)

    this.model = ctx.model
  }

  async findList(filters: any) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);
    let condition: any = {};
    console.log(filters);
    if (filters.category_type) {
      condition.category_type = filters.category_type;
    }
    // this.model
    const reply = await this.model.Category.findAll({
      offset,
      limit,
      where: condition,
    });

    const total = await this.model.Category.count({
      where: condition,
    });

    return {
      list: reply,
      page: filters.page,
      pageSize: filters.pageSize,
      total,
    }
  }

  async search(filters: any) {
    const { model } = this;
    // const { model } = ctx;
    const {
      search = '',
      category_type = '',
    } = filters;

    const condition: any = {};
    
    if (search) {
      condition.name = {
        [model.Op.like]: `%${search}%`,
      }
    }

    if (category_type) {
      condition.category_type = category_type;
    }
    
    const categories = await model.Category.findAll({
      where: condition,
    });

    return {
      categories,
    }
  }

  async create(category: categoryAttribute) {
    // this.model.Admin
    category.create_time = new Date();
    category.modify_time = new Date();

    const created = await this.model.Category.create(category);
    return {
      id: created.id,
      createdAt: moment(created.create_time).format(moment.defaultFormat),
    }
  }

  async update(id: number, fields: any) {
    fields.modify_time = new Date();
    await this.model.Category.update(fields, {
      where: {
        id,
      },
    });

    return {
      id,
    };
  }
}