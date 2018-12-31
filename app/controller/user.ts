import { Controller } from 'egg';

export default class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const {
      page,
      pageSize,
      ...rest
    } = ctx.request.query;
    // console.log(rest);
    const reply = await service.user.findList({ page, pageSize, ...rest });
    ctx.body = reply;
  }

  async searchUser() {
    const { ctx, service } = this;
    const { search } = ctx.request.query;
    const reply = await service.user.searchUser(search);

    ctx.body = reply;
  }

  async show() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    const reply = await service.user.findUserByID(id);

    ctx.body = reply;
  }

  async showVipInfo() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    const reply = await service.user.findUserVipInfoByID(id);

    ctx.body = reply;
  }

  async showAgentInfo() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    const reply = await service.user.findAgentInfoByID(id);

    ctx.body = reply;
  }

  async passRealnameAuth() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const reply = await service.user.passAuthRealname(id);

    ctx.response.body = reply;
  }

  async refuseRealnameAuth() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const reply = await service.user.passAuthRealname(id);

    ctx.response.body = reply;
  }

  async passFinanceAuth() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const reply = await service.user.passAuthFinance(id);

    ctx.response.body = reply;
  }

  async refuseFinanceAuth() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const reply = await service.user.refuseAuthFinance(id);

    ctx.response.body = reply;
  }
  
}