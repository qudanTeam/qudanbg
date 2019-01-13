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
    const reply = await service.user.refuseAuthRealname(id);

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

  async queryChildUsers() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const reply = await service.user.findChildReward(id, ctx.request.query);
    ctx.response.body = reply;
  }

  async update() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const reply = await service.user.updateUser(id, ctx.request.body);

    ctx.response.body = reply;
  }

  /**
   * 充值
   */
  async deposit() {
    const { ctx } = this;
    const id = ctx.params.id;
    const {
      blance,
    } = ctx.request.body;

    console.log(blance, 'blance');
    const { model } = ctx;

    const foundUserAccount = await model.UserAccount.findOne({
      where: {
        user_id: id,
      },
    });

    if (!foundUserAccount) {
      // ctx.throw(404, 'not found this account');
      const reply = await model.UserAccount.create({
        id: 0,
        user_id: id,
        blance: Number(blance),
        allow_tx: Number(blance),
      });

      await model.TradeType.create({
        id: 0,
        trade_type: 6,
        price: blance,
        create_time: new Date(),
        modify_time: new Date(),
        status: 2,
        account: reply.id,
        send_status: 2,
        audit_time: new Date(),
        send_time: new Date(),
        user_id: id,
      });

      ctx.response.body = {
        id: reply.user_id,
      };
      return
    }
    await model.UserAccount.update({
      blance: Number(foundUserAccount.blance) + Number(blance),
      allow_tx: Number(foundUserAccount.allow_tx) + Number(blance),
    }, {
      where: {
        user_id: id,
      }
    });

    await model.TradeType.create({
      id: 0,
      trade_type: 6,
      price: blance,
      create_time: new Date(),
      modify_time: new Date(),
      status: 2,
      account: foundUserAccount.id,
      send_status: 2,
      audit_time: new Date(),
      send_time: new Date(),
      user_id: id,
    })

    ctx.response.body = {
      id,
    };

    return;
  }
  
}