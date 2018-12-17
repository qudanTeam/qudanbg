import { Controller } from 'egg';

export default class ShareManager extends Controller {
  async index() {
    const { ctx, service } = this;
    const {
      page,
      pageSize,
      ...rest
    } = ctx.request.query;
    
    const reply = await service.shareManager.findList({ page, pageSize, ...rest });
    ctx.body = reply;
  }

  async update() {
    const { ctx, service } = this;
    // const reply = await = ser
    const id = ctx.params.id;
    const reply = await service.shareManager.update(id, ctx.request.body);

    ctx.body = {
      reply
    };

  }

  async create() {
    const { ctx, service } = this;
    const reply = await service.shareManager.create(ctx.request.body);

    ctx.body = reply;
    ctx.status = 201;
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    await service.shareManager.deleteById(id);

    ctx.body = {
      message: 'ok',
    }
  }

  async searchProducts() {
    const { ctx } = this;
    const { model } = ctx;
    const {
      search = '',
    } = ctx.request.query;
    
    const products = await model.Product.findAll({
      where: {
        product_name: {
          [model.Op.like]: `%${search}%`,
        }
      }
    });

    ctx.body = {
      products,
    };
  }
}