import { Service, Context } from 'egg';
import sequelize = require('sequelize');

export default class AgentConfig extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx);
    this.model = ctx.model;
  }

  async deleteById(id: number) {
    const foundConfig = await this.model.AgentConfig.findOne({
      where: {
        id,
      }
    });

    if (!foundConfig) {
      this.ctx.throw(404, 'not found this config');
      return
    }

    await this.model.AgentConfig.destroy({where: {id}});

    return true;
  }

  async findOneByID(id: number) {
    const founded = await this.model.AgentConfig.findOne({
      where: {
        id,
      }
    });

    return founded;
  }

  async findList(filters: any) {
    const { offset, limit, page, pageSize } = this.ctx.helper.parsedPageFromParams(filters);
    
    const list = await this.model.AgentConfig.findAll({
      offset,
      limit,
    });

    const total = await this.model.AgentConfig.count();

    return {
      list,
      page: page,
      pageSize: pageSize,
      total,
    };
  }

  async create(body) {
    const createdConfig = await this.model.AgentConfig.create(body);

    return {
      id: createdConfig.id,
    }
  }

  async update(id: number, body) {
    if ((await this.model.AgentConfig.count({where: {id}})) <= 0) {
      this.ctx.throw(404, 'not found this config');
      return
    }
    body.modify_time = new Date();

    await this.model.AgentConfig.update(body, {
      where: {
        id,
      }
    });

    return {
      id,
    };
  }
}