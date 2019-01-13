import { Service, Context } from 'egg';
import sequelize = require('sequelize');
import moment = require('moment');
import { product_configAttribute } from '../entity/db';

export default class ProductConfig extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx)

    this.model = ctx.model
  }

  async findList(filters: any) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);

    let sql = `
    SELECT pc.*, p.product_name FROM product_config pc LEFT JOIN product p ON p.id = pc.product_id
    `;

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
      page: filters.page,
      pageSize: filters.pageSize,
      total: totals[0].c,
    };
  }

  async create(config: product_configAttribute) {
    // this.model.Admin
    config.create_time = new Date();
    config.modify_time = new Date();

    const created = await this.model.ProductConfig.create(config);
    return {
      id: created.id,
      createdAt: moment(created.create_time).format(moment.defaultFormat),
    }
  }

  async update(id: number, fields: any) {
    fields.modify_time = new Date();
    await this.model.ProductConfig.update(fields, {
      where: {
        id,
      },
    });

    return {
      id,
    };
  }
}