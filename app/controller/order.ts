import { Controller } from 'egg';

export default class OrderController extends Controller {
  async index() {
    const { ctx } = this;

    const {
      page = 0,
      pageSize = 15,
      ...rest
    } = ctx.request.query;

    const result = await ctx.service.order.findList({ page, pageSize, ...rest });
    this.ctx.body = result;
  }

  async show() {
    const { ctx, service } = this;

    const { id } = ctx.params;
    const found = await service.order.details(id);

    this.ctx.body = {
      order: found,
    }
  }

  async passOne() {
    const { ctx } = this;
    
    const { id } = ctx.params;

    const reply = await ctx.service.order.passOne(id);

    this.ctx.body = reply;
  }

  async refuseOne() {
    const { ctx } = this;
    
    const { id } = ctx.params;

    const reply = await ctx.service.order.refuseOne(id);

    this.ctx.body = reply;
  }
}