import { Controller } from 'egg';

export default class BannerController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { page = 0, pageSize = 15 } = ctx.request.query;
    const reply = await service.banner.findList({
      page,
      pageSize,
    });

    this.ctx.body = reply;
  }

  async create() {
    const { ctx, service } = this;
    const {
      title,
      link,
      img,
      sort,
      isShow = false
    } = ctx.request.body;

    const reply = await service.banner.create({
      id: 0,
      title,
      link,
      img,
      sort_val: sort,
      is_show: isShow,
    });

    ctx.body = reply;
    ctx.status = 201;
  }

  async update() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const { body } = ctx.request;
    const reply = await service.banner.update(id, body);

    this.ctx.body = {
      reply,
    };

  }

  async destroy() {
    const { ctx, service } = this;
    const { id } = ctx.params;

    const reply = await service.banner.deleteById(id);

    this.ctx.body = reply;
  }
}