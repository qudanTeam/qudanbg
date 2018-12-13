import { Controller } from 'egg';

export default class CustomerController extends Controller {
  async index() {
    const { ctx } = this;

    const {
      page = 0,
      pageSize = 15,
      ...rest
    } = ctx.request.query;

    const result = await ctx.service.customer.findList({ page, pageSize, ...rest });
    this.ctx.body = result;
  }

  async create() {
    const { ctx, service } = this;
    const { body } = ctx.request;
    const reply = await service.customer.create(body);

    if (!reply) {
      ctx.body = {
        message: '创建失败',
      }
      ctx.status = 400;
      return
    }

    ctx.status = 201;
    ctx.body = reply;
  }
}