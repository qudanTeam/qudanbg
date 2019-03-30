import { Service, Context } from 'egg';
import sequelize = require('sequelize');

export default class User extends Service {

  model: sequelize.Sequelize

  constructor(ctx: Context) {
    super(ctx);

    this.config = this.app.config;
    this.model = ctx.model;
  }

  /**
   * 通过某次实名认证
   * @param id 
   */
  async passAuthRealname(id: number) {
    const foundUser = await this.model.User.findOne({
      where: {
        id,
      },
    });

    if (!foundUser) {
      this.ctx.throw(404, 'not found this user');
      return;
    }

    await this.model.User.update({
      status: 3,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    };
  }

  /**
   * 拒绝某次实名认证, 需要清空实名认证信息
   * @param id 
   */
  async refuseAuthRealname(id: number) {
    const foundUser = await this.model.User.findOne({
      where: {
        id,
      },
    });

    if (!foundUser) {
      this.ctx.throw(404, 'not found this user');
      return;
    }

    await this.model.User.update({
      realname: '',
      id_no: '',
      status: 4,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    };
  }

  /**
   * 通过某次财务认证
   * @param id 
   */
  async passAuthFinance(id: number) {
    const foundUser = await this.model.User.findOne({
      where: {
        id,
      },
    });

    if (!foundUser) {
      this.ctx.throw(404, 'not found this user');
      return;
    }

    await this.model.User.update({
      finance_status: 3,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    };
  }

  /**
   * 拒绝某次财务认证
   * @param id 
   */
  async refuseAuthFinance(id: number) {
    const foundUser = await this.model.User.findOne({
      where: {
        id,
      },
    });

    if (!foundUser) {
      this.ctx.throw(404, 'not found this user');
      return;
    }

    await this.model.User.update({
      alipay_no: '',
      finance_status: 4,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    };
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
      wb.wechat_name wechat_name,
      numTemp.invite_num
    FROM user 
    LEFT JOIN vip_record vipr ON vipr.user_id = user.id 
    LEFT JOIN vip_config vipc ON vipc.id = vipr.vip_config_id AND vipc.vip_name = user.vip_name
    LEFT JOIN user au ON au.invite_code = user.recommend_invite_code
    LEFT JOIN user_account ua ON ua.user_id = user.id
    LEFT JOIN weixin_binding wb ON wb.user_id = user.id
    LEFT JOIN (
      SELECT u.recommend_invite_code invite_code, COUNT(u.recommend_invite_code) invite_num FROM user u WHERE u.recommend_invite_code IS NOT NULL GROUP BY u.recommend_invite_code
    ) AS numTemp ON numTemp.invite_code = user.invite_code
    WHERE 1=1
    `;

    if (filter.id) {
      sql += ` AND user.id LIKE '%${filter.id}%'`;
    }

    if (filter.invite_code) {
      sql += ` AND user.invite_code LIKE '%${filter.invite_code}%'`;
    }

    if (filter.register_mobile) {
      sql += ` AND user.register_mobile LIKE '%${filter.register_mobile}%'`;
    }

    if (filter.recommend_invite_code) {
      sql += ` AND user.recommend_invite_code LIKE '%${filter.recommend_invite_code}%'`;
    }

    if (filter.authenticate_type) {
      if (filter.authenticate_type === 'realname') {
        // 实名认证
        sql += ` AND user.status = 3`;
      } else if (filter.authenticate_type === 'financial') {
        // 财务认证
        sql += ` AND user.finance_status = 3`;
      }
    }

    if (filter.user_type) {
      
      if (filter.user_type === 'realname') {
        // 实名认证
        sql += ` AND user.status = 3`;
      } else if (filter.user_type === 'finance') {
        // 财务认证
        sql += ` AND user.finance_status = 3`;
      } else if (filter.user_type === 'default') {
        // 默认身份
        sql += ` AND user.user_type = 0`;
      } else if (filter.user_type === 'vip') {
        // vip 
        sql += ` AND user.user_type = 1`;
      } else if (filter.user_type === 'agent') {
        // 代理
        sql += ` AND user.user_type = 2`;
      }
    }

    if (filter.id_no) {
      sql += ` AND user.id_no LIKE '%${filter.id_no}%'`;
    }

    if (filter.alipay_no) {
      sql += ` AND user.alipay_no LIKE '%${filter.alipay_no}%'`;
    }

    if (filter.username) {
      sql += ` AND user.username LIKE '%${filter.username}%'`;
    }

    if (filter.realname) {
      sql += ` AND user.realname LIKE '%${filter.realname}%'`;
    }

    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { type: this.model.QueryTypes.SELECT });

    sql += ' ORDER BY user.register_time DESC'
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

  async findChildReward(id: number, filters: any) {

    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filters);

    let sql = `
    SELECT agv.parent_agent_id, agv.parent_user_id, agv.id a_agent_id, agv.user_id user_id, u.* 
    FROM (
      SELECT * FROM agents_view av WHERE av.parent_user_id = :id
      UNION 
      SELECT agvt.* FROM agents_view agvt 
      LEFT JOIN agents_view pag ON agvt.parent_agent_id = pag.id WHERE pag.parent_user_id = :id
    ) AS agv 
    LEFT JOIN user u ON u.id = agv.user_id WHERE 1=1
    `;

    const totals = await this.model.query(`
    SELECT count(*) c FROM (${sql}) AS temp
    `, { replacements: {id}, type: this.model.QueryTypes.SELECT });

    sql += ' LIMIT :offset, :limit';

    const list = await this.model.query(sql, {
      replacements: { offset, limit, id },
      type: this.model.QueryTypes.SELECT,
    });

    return {
      list,
      page: filters.page,
      pageSize: filters.pageSize,
      total: totals[0].c,
    };
  }

  async updateUser(id: number, data: any) {
    const foundUser = await this.model.User.findOne({
      where: {
        id,
      }
    });

    if (!foundUser) {
      this.ctx.throw(404, "not found this");
      return;
    }

    // this.model.Product.update()
    await this.model.User.update(data, {
      where: {
        id,
      }
    });

    return {
      id,
    }
  }
}