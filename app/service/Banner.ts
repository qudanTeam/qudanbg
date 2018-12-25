import { Service, Context } from 'egg';
import sequelize = require('sequelize');
import { bannerAttribute } from '../entity/db';
import moment = require('moment');

export default class Banner extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx)

    this.model = ctx.model
  }

  async findList(filters: any) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);

    const reply = await this.model.Banner.findAll({
      offset,
      limit,
    });

    const total = await this.model.Banner.count();

    return {
      list: reply,
      page: filters.page,
      pageSize: filters.pageSize,
      total,
    }
  }

  async create(banner: bannerAttribute) {
    // this.model.Admin
    const createdBanner = await this.model.Banner.create(banner);
    return {
      id: createdBanner.id,
      createdAt: moment(createdBanner.create_time).format(moment.defaultFormat),
    }
  }

  async update(id: number, fields: any) {
    fields.modify_time = new Date();
    await this.model.Banner.update(fields, {
      where: {
        id,
      },
    });

    return {
      id,
    };
  }

  async deleteById(id: number) {
    await this.model.Banner.destroy({
      where: {
        id,
      }
    });

    return {
      id,
    }
  }
}