import { Service } from 'egg';
import sequelize = require('sequelize');

export default class VipConfig extends Service {
  model: sequelize.Sequelize
  
  constructor(ctx) {
    super(ctx);

    this.config = this.app.config;
    this.model = ctx.model;
  }

  async findList(filter) {
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filter);

    const list = await this.model.VipConfig.findAll({
      offset,
      limit,
    });

    

    const total = await this.model.VipConfig.count();
    return {
      list,
      page: filter.page,
      pageSize: filter.pageSize,
      total,
    };
  }

  async create(body) {
    const createdConfig = await this.model.VipConfig.create(body);

    return {
      id: createdConfig.id,
    }
  }

  async update(id: number, body) {
    if ((await this.model.VipConfig.count({where: {id}})) <= 0) {
      this.ctx.throw(404, 'not found this config');
      return
    }

    await this.model.VipConfig.update(body, {
      where: {
        id,
      }
    });

    return {
      id,
    };
  }

  async deleteById(id: number) {
    const foundConfig = await this.model.VipConfig.findOne({
      where: {
        id,
      }
    });

    if (!foundConfig) {
      this.ctx.throw(404, 'not found this config');
      return
    }

    if (foundConfig.isenable) {
      this.ctx.throw(400, '该配置已经被启用，无法删除');
      return
    }

    await this.model.VipConfig.destroy({where: {id}});

    return true;
  }

  async findOneById(id: number) {
    const foundConfig = await this.model.VipConfig.findOne({
      where: {
        id,
      },
    });

    return foundConfig;
  }
}