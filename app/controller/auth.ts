import { Controller } from 'egg';

export default class AuthController extends Controller {
  async login() {
    const { ctx, service } = this;

    const {
      username,
      password,
    } = ctx.request.body;

    const reply = await service.auth.login(username, password);

    if (!reply.ok) {
      ctx.body = {
        message: '用户名或者密码错误',
        ...reply,
      };
      return;
    }

    ctx.body = {
      message: '登录成功',
      ...reply,
    };
  }
}