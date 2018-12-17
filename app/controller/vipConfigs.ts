import { Controller } from 'egg';

export default class VipConfigsController extends Controller {
  async index() {
    const { ctx, service } = this;
    const {
      page,
      pageSize,
      ...rest
    } = ctx.request.query;
    
    const reply = await service.vipConfig.findList({ page, pageSize, ...rest });
    ctx.body = reply;
  }

  async update() {
    const { ctx, service } = this;
    // const reply = await = ser
    const id = ctx.params.id;
    const reply = await service.vipConfig.update(id, ctx.request.body);

    ctx.body = reply;

  }

  async create() {
    const { ctx, service } = this;
    const reply = await service.vipConfig.create(ctx.request.body);

    ctx.body = reply;
    ctx.status = 201;
  }

  async show() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    const reply = await service.vipConfig.findOneById(id);

    ctx.body = {
      reply,
    };
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    await service.vipConfig.deleteById(id);

    ctx.body = {
      message: 'ok',
    }
  }
}