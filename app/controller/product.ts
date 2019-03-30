import { Controller } from 'egg';

export default class ProductController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { page = 0, pageSize = 15, ...rest } = ctx.request.query;
    const reply = await service.product.findList({
      page,
      pageSize,
      ...rest,
    });

    this.ctx.body = reply;
  }

  async create() {
    const { ctx, service } = this;
    const { body } = ctx.request;

    const reply = await service.product.create(body);

    ctx.response.body = reply;
    ctx.response.status = 201;
  }

  async update() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const { body } = ctx.request;
    const auth = ctx.request.header.authorization;
    // const auth = '';
    // console.log(ctx.request.headers);
    // console.log(ctx.request.header);
    const token = auth.replace('Bearer', '').trim();
    const admin = await service.auth.getUserByToken(token);

    if (!admin) {
      body.update_admin = '';
    } else {
      body.update_admin = admin.username;
    }
    
    const reply = await service.product.update(id, body);

    this.ctx.body = {
      reply,
    };
  }

  async show() {
    const { ctx, service } = this;

    const { id } = ctx.params;
    const reply = await service.product.details(id);
// console.log(reply);
    ctx.body = reply;
    // this.ctx.body = reply;
  }

  async onShelf() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const reply = await service.product.onShelf(id);

    ctx.response.body = reply;
  }

  async disableShelf() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const reply = await service.product.disableShelf(id);

    ctx.response.body = reply;
  }

  /**
   * 搜索产品绑定链接
   */
  async searchLinks() {
    const { ctx } = this;
    const { model } = ctx;
    // const { model } = ctx;
    const {
      search = '',
      product_type = 1,
    } = ctx.request.query;

    const condition: any = {};
    
    if (search) {
      condition.product_name = {
        [model.Op.like]: `%${search}%`,
      }
    }

    if (product_type) {
      condition.product_type = product_type;
    }
    
    const links = await model.ProductLinks.findAll({
      where: condition,
    });

    ctx.response.body = {
      links,
    };
    
  }

  /**
   * 删除商品
   */
  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    await service.product.delete(id);

    ctx.body = {
      message: 'ok',
    }
  }
  
}