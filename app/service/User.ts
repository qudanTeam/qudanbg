import { Service, Context } from 'egg';
import sequelize = require('sequelize');

export default class User extends Service {

  model: sequelize.Sequelize

  constructor(ctx: Context) {
    super(ctx);

    this.config = this.app.config;
    this.model = ctx.model;
  }

  async searchUser(search: string) {
    const users = await this.model.User.findAll({
      where: {
        username: {
          [this.model.Op.like]: `%${search}%`,
        }
      }
    });

    return {
      users,
    }
  }

  // 获取用户列表
  async findList(filter) {
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filter);

    let sql = `
    SELECT 
      user.*, 
      vipc.vip_name vipname, 
      au.username recommend_username,
      ua.blance balance,
      wb.wechat_name wechat_name
    FROM user 
    LEFT JOIN vip_record vipr ON vipr.user_id = user.id 
    LEFT JOIN vip_config vipc ON vipc.id = vipr.vip_config_id AND vipc.vip_name = user.vip_name
    LEFT JOIN user au ON au.invite_code = user.recommend_invite_code
    LEFT JOIN user_account ua ON ua.user_id = user.id
    LEFT JOIN weixin_binding wb ON wb.user_id = user.id
    WHERE 1=1
    `;

    if (filter.id) {
      sql += ` AND user.id LIKE '%${filter.id}%'`;
    }

    if (filter.register_mobile) {
      sql += ` AND user.register_mobile = ${filter.register_mobile}`;
    }

    if (filter.id_no) {
      sql += ` AND user.id_no = ${filter.id_no}`;
    }

    if (filter.alipay_no) {
      sql += ` AND user.alipay_no = ${filter.alipay_no}`;
    }

    if (filter.username) {
      sql += ` AND user.username LIKE '%${filter.username}%'`;
    }

    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { type: this.model.QueryTypes.SELECT });

    sql += ' LIMIT :offset, :limit';

    const list = await this.model.query(sql, {
      replacements: { offset, limit },
      type: this.model.QueryTypes.SELECT,
    });
    return {
      list,
      page: filter.page,
      pageSize: filter.pageSize,
      total: totals[0].c,
    };
  }

  async findUserByID(id) {
    // const UserModel = this.model.User;
    const sql = `
    SELECT 
      user.*, 
      vipc.vip_name vipname, 
      au.username recommend_username,
      ua.blance balance,
      wb.wechat_name wechat_name
    FROM user 
    LEFT JOIN vip_record vipr ON vipr.user_id = user.id 
    LEFT JOIN vip_config vipc ON vipc.id = vipr.vip_config_id AND vipc.vip_name = user.vip_name
    LEFT JOIN user au ON au.invite_code = user.recommend_invite_code
    LEFT JOIN user_account ua ON ua.user_id = user.id
    LEFT JOIN weixin_binding wb ON wb.user_id = user.id
    WHERE 1=1 AND user.id = :id
    `;
    const foundUser = await this.model.query(sql, {
      replacements: {
        id,
      },
      type: this.model.QueryTypes.SELECT,
    });

    return foundUser[0];
  }

  async findUserVipInfoByID(id) {
    const VipRecordEnabledView = this.model.VipRecordEnabledView;

    const founded = await VipRecordEnabledView.findOne({
      where: {
        user_id: id,
      },
    });

    return founded;
  }

  async findAgentInfoByID(id) {

    const sql = `
    SELECT * FROM agents_view av WHERE av.parent_user_id = :user_id
    UNION 
    SELECT agv.* FROM agents_view agv 
    LEFT JOIN agents_view pagv ON agv.parent_user_id = pagv.user_id WHERE pagv.parent_user_id = :user_id
    `;

    const agents = await this.model.query(sql, {
      replacements: { user_id: id },
      type: this.model.QueryTypes.SELECT,
    });

    return {
      agents,
    };
  }
}