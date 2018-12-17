import { Controller } from 'egg';

export default class AgentController extends Controller {
  async index() {
    const { ctx } = this;

    const {
      page = 0,
      pageSize = 15,
      ...rest
    } = ctx.request.query;

    const result = await ctx.service.agent.findList({ page, pageSize, ...rest });
    this.ctx.body = result;
  }

  async rewards() {
    const { ctx } = this;

    const {
      pid = 0,
      page = 0,
      pageSize = 15,
      ...rest
    } = ctx.request.query;

    const result = await ctx.service.agent.findChildReward(Number(pid), { page, pageSize, ...rest });
    this.ctx.body = result;
  }

  async childs() {
    const { ctx } = this;

    const {
      pid = 0,
      page = 0,
      pageSize = 15,
      ...rest
    } = ctx.request.query;

    const result = await ctx.service.agent.findChilds(Number(pid), { page, pageSize, ...rest });
    this.ctx.body = result;
  }
}