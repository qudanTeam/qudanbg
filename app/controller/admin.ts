import { Controller } from 'egg';

/**
 * test
 */
export default class AdminController extends Controller {
  async index() {
    // this.ctx.body = 'Welcome to this service';
    const { ctx } = this;

    const {
      page = 0,
      pageSize = 15,
    } = ctx.request.query;

    const result = await ctx.service.admin.findList({ page, pageSize });
    this.ctx.body = result;
  }

  async create() {
    const { ctx, service } = this;
    // const createRule = {
    //   username: { type: 'string' },
    //   password: { type: 'string' },
    //   enabled: { type: 'boolean', default: false },
    // };
    // ctx.validate(createRule);

    const { body } = ctx.request;
    const reply = await service.admin.create(body);

    if (!reply) {
      ctx.body = {
        message: '创建失败',
      }
      ctx.status = 400;
      return
    }

    ctx.status = 201;
    ctx.body = reply;
  }

  async destroy() {
    const { id } = this.ctx.params;
    const reply = await this.service.admin.deleteByID(id);

    if (!reply) {
      this.ctx.status = 500;
      this.ctx.body = {
        deleted: false,
      };
    }

    this.ctx.body = {
      deleted: true,
    };
  }

  /**
   * 修改
   */
  async update() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    // console.log(ctx.request.body, 'body');
    const reply = await service.admin.update(ctx.request.body, id);
    ctx.body = reply;
    ctx.status = 200;
  }

  /**
   * 修改密码
   */
  async updatePassword() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const { password } = ctx.request.body
    // console.log(ctx.request.body, 'body');
    const reply = await service.admin.resetPassword(password, Number(id));
    ctx.body = reply;
    ctx.status = 200;
  }

  /**
   * 分配权限
   */
  async put_permission() {
    const { ctx, service } = this;
    // const adminMenuPermission =
    const {
      admin = '',
      permissions = [],
    } = ctx.request.body;

    await service.admin.putPermissions(admin, permissions);

    ctx.body = {};
  }
}