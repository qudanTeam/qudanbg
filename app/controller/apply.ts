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

  async shipPos() {
    const { ctx } = this;
    const id = ctx.params.id;
    const {
      express_name,
      express_no,
      pos_no,
    } = ctx.request.body;

    const res = await this.service.apply.ship(id, {
      express_name,
      express_no,
      pos_no,
    });

    this.ctx.body = res;
  }

  async signing() {
    const { ctx } = this;
    const id = ctx.params.id;
    const res = await this.service.apply.signing(id);

    this.ctx.body = res;
  }
}