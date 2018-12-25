
import { Service, Context } from 'egg';
import sequelize = require('sequelize');
import moment = require('moment');
// import { adminAttribute } from '../entity/db';

export default class Admin extends Service {
  // model: sequelize.Model<any, any>
  model: sequelize.Sequelize

  constructor(ctx: Context) {
    super(ctx);

    this.model = ctx.model;
  }

  async findList(filter) {
    // const { page, pageSize } = filter;
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filter);
    
    const list = await this.model.Admin.findAll({
      offset,
      limit,
    });
    const total = await this.model.Admin.count();

    return {
      list,
      page: filter.page,
      pageSize: filter.pageSize,
      total,
    };
  }

  async create(admin) {
    const { username = '', password, enabled = false } = admin;
    const _password = await this.ctx.helper.bcryptHash(password);
    // console.log(_password, 'pwd');
    
    if ((await this.model.Admin.count({where: { username }})) > 0) {
      return false
    }
    
    const createdAdmin = await this.model.Admin.create({
      id: 0,
      username,
      password: _password,
      enabled,
    });

    return {
      id: createdAdmin.id,
      createdAt: moment(createdAdmin.create_at).format(moment.defaultFormat),
      // createdAt: createdAdmin.create_at ? createdAdmin.create_at. : null,
    };
  }

  async deleteByID(id) {
    return await this.model.Admin.destroy({
      where: {
        id,
      },
    });
  }

  async update(admin, id) {
    const {
      oldPassword,
      newPassword,
    } = admin;

    const AdminModel = this.model.Admin;
    const foundAdmin = await AdminModel.findById(id);

    if (!foundAdmin) {
      this.ctx.throw(404, 'Not found this admin')
      return
    }

    if (oldPassword) {
      const cp = await this.ctx.helper.bcryptCompare(oldPassword, foundAdmin.password);
      if (!cp) {
        throw new Error('原密码输入错误');
      }
    }
    if (newPassword) {
      admin.password = await this.ctx.helper.bcryptHash(newPassword);
    }

    admin.update_at = new Date();
    await AdminModel.update(admin, {
      where: {
        id,
      },
    });

    return {
      id,
    };
  }

  async resetPassword(password: string, id: number) {
    const _password = await this.ctx.helper.bcryptHash(password);

    await this.model.Admin.update({
      password: _password
    }, {
      where: {
        id,
      },
    });

    return {
      id,
    }
  }

  async toggleEnable(id) {
    const foundAdmin = await this.model.Admin.findById(id);
    if (!foundAdmin) {
      this.ctx.throw(404, 'Not found this admin')
      return
    }

    return this.model.Admin.update({
      enabled: !foundAdmin.enabled ? 1 : 0,
    }, {
      where: {
        id,
      },
    });
  }

  async findOneByID(id) {
    return await this.model.Admin.findById(id);
  }

  async putPermissions(admin, permissions = []) {
    // const AdminModel = this.model.Admin;
    const AdminMenuPermissionModel = this.model.AdminMenuPermission;
    await AdminMenuPermissionModel.destroy({
      where: {
        admin_id: admin,
      },
    });
    const admPermissions: any[] = [];

    for (const permission in permissions) {
      admPermissions.push({
        admin_id: admin,
        permission_id: permission,
      });
    }

    return AdminMenuPermissionModel.bulkCreate(admPermissions);
  }
}