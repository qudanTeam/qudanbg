import { Controller } from 'egg';

export default class MessageController extends Controller {
  async index() {
    const { ctx } = this;

    const {
      page = 0,
      pageSize = 15,
    } = ctx.request.query;

    const result = await ctx.service.message.findList({ page, pageSize });
    this.ctx.body = result;
  }

  async push() {
    const { ctx, service } = this;
    const { id } = this.ctx.params;

    const result = await service.message.push(id);

    ctx.body = result;
    ctx.status = 201;
  }

  async create() {
    const { ctx, service } = this;

    const result = await service.message.createMsg(ctx.request.body);

    ctx.body = result;
    ctx.status = 201;
  }

  async update() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const { body } = ctx.request;
    const reply = await service.message.updateMsg(body, id);

    this.ctx.body = {
      reply,
    };
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    await service.message.delete(id);

    ctx.body = {
      message: 'ok',
    }
  }
}