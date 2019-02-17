import { Context } from 'egg';
// import * as jwt from 'jsonwebtoken';
// 这里是你自定义的中间件
export default function AuthMiddleware(): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 你可以获取 config 的配置：
    // const config = ctx.app.config;
    // config.xxx....

    const { header } = ctx;

    const whiteList = ctx.app.config.whiteList;

    // for ctx.request.path
    for (let i in whiteList) {
      const p = whiteList[i];
      console.log(p, '====');
      console.log(ctx.request.path,' ====--===');
      if (p.match(ctx.request.path)) {
        console.log(ctx.request.path, 'path');
        await next();
        return;
      }
    }

    const authorization = header.authorization;

    const token = authorization.replace('Bearer', '').trim();

    if (!token) {
      ctx.response.status = 401;
      ctx.response.body = 'Unauthorization';
      return;
    }
    try {
      const admin = await ctx.service.auth.getUserByToken(token);

      if (!admin) {
        ctx.response.status = 401;
        ctx.response.body = 'Unauthorization';
        return;
      }
    } catch (e) {
      ctx.response.status = 401;
      ctx.response.body = 'Unauthorization';
      return;
    }
    
    await next();
  };
}