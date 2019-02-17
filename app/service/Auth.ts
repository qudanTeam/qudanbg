import { Service, Context } from 'egg';
import sequelize = require('sequelize');
import * as jwt from 'jsonwebtoken';
import * as uuidv4 from 'uuid/v4';

export default class Auth extends Service {

  model: sequelize.Sequelize

  constructor(ctx: Context) {
    super(ctx);

    this.model = ctx.model;
  }

  async login(username, password) {
    const { ctx, config } = this;
    const AdminModel = this.model.Admin;
    const foundAdmin = await AdminModel.findOne({
      where: {
        username,
      },
    });

    if (!foundAdmin) {
      // throw new Error("not found the admin")
      // ctx.throw(404, "not found this admin")
      return { ok: false }
      
    }
    
    const compared = await ctx.helper.bcryptCompare(password, foundAdmin ? foundAdmin.password : '');
    if (compared) {
      const token = jwt.sign({
        uid: foundAdmin.id,
        ssid: uuidv4(),
      }, config.jwt.salt, {
        expiresIn: 7 * 24 * 3600,
      });

      // jwt.decode('', {
        
      // })
      return {
        ok: true,
        token,
      };
    }

    return {
      ok: false,
    };
  }

  async getUserByToken(token: string) {
    const { model, config } = this;
    const decoded:any = await jwt.verify(token, config.jwt.salt);
    let uid = '';

    if (typeof decoded === 'string') {
      uid = decoded;
    } else {
      uid = decoded.uid;
    }

    // const { uid = '' } = decoded;
  

    return model.Admin.findOne({
      where: {
        id: uid,
      }
    });
  }
}