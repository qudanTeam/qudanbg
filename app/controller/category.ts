import { Controller } from 'egg';

export default class CategoryController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { page = 0, pageSize = 15, ...rest } = ctx.request.query;
    const reply = await service.category.findList({
      page,
      pageSize,
      ...rest,
    });

    this.ctx.body = reply;
  }

  async create() {
    const { ctx, service } = this;
    const { body } = ctx.request;

    const reply = await service.category.create(body);

    ctx.response.body = reply;
    ctx.response.status = 201;
  }

  async update() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const { body } = ctx.request;
    const reply = await service.category.update(id, body);

    this.ctx.body = {
      reply,
    };
  }

  async search() {
    const { ctx } = this;


    const result = await ctx.service.category.search(ctx.request.query);
    this.ctx.body = result;
  }
}