import { Controller } from 'egg';

export default class ApplyController extends Controller {
  async index() {
    const { ctx } = this;

    const {
      page = 0,
      pageSize = 15,
      ...rest
    } = ctx.request.query;

    const result = await ctx.service.apply.findList({ page, pageSize, ...rest });
    this.ctx.body = result;
  }

  async trades() {
    const { ctx } = this;


    const {
      page = 0,
      pageSize = 15,
      ...rest
    } = ctx.request.query;

    const result = await ctx.service.apply.findProductTrades(ctx.params.id, { page, pageSize, ...rest })
    this.ctx.body = result;
  }
}