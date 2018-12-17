import { Controller } from 'egg';

export default class AgentConfig extends Controller {
  async index() {
    const { ctx, service } = this;
    const {
      page,
      pageSize,
      ...rest
    } = ctx.request.query;
    
    const reply = await service.agentConfig.findList({ page, pageSize, ...rest });
    ctx.body = reply;
  }

  async show() {
    const { ctx, service } = this;
    const {
      id
    } = ctx.params;

    const reply = await service.agentConfig.findOneByID(id);

    ctx.body = {
      reply,
    };
  }

  async update() {
    const { ctx, service } = this;
    // const reply = await = ser
    const id = ctx.params.id;
    const reply = await service.agentConfig.update(id, ctx.request.body);

    ctx.body = reply;

  }

  async create() {
    const { ctx, service } = this;
    const reply = await service.agentConfig.create(ctx.request.body);

    ctx.body = reply;
    ctx.status = 201;
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    await service.agentConfig.deleteById(id);

    ctx.body = {
      message: 'ok',
    }
  }
}