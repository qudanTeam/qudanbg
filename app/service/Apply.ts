import { Service, Context } from 'egg';
import sequelize = require('sequelize');

export default class Apply extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx)

    this.model = ctx.model
  }

  async findList(filters: any) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);

    let where = '';

    if (filters.product_name) {
      where += ` AND p.product_name LIKE '%${filters.product_name}%'`
    }

    let sql = `
    SELECT 
      p.id, 
      p.product_name, 
      COUNT(1) total
    FROM apply aly 
    LEFT JOIN product p ON p.id = aly.product_id 
    WHERE 1=1 ${where}
    GROUP BY p.id, p.product_name
    `
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

  async findProductTrades(id:number, filters: any) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);

    const foundProduct = await this.model.Product.findOne({
      where: {
        id,
      },
    });

    if (!foundProduct) {
      ctx.throw(404, "not found this product");
      return
    }

    // foundProduct.

    let where = ` AND p.id = ${id}`;

    if (filters.user_invite_code) {
      where += ` AND u.invite_code LIKE '%${filters.user_invite_code}%'`
    }

    if (filters.user_mobile) {
      where += ` AND u.mobile LIKE '%${filters.user_mobile}%'`
    }

    if (filters.user_id_no) {
      where += ` AND u.id_no LIKE '%${filters.user_id_no}%'`
    }

    if (filters.user_recommend_invite_code) {
      where += ` AND u.recommend_invite_code LIKE '%${filters.user_recommend_invite_code}%'`
    }

    let sql = `
    SELECT 
      aly.*,
      p.product_type,
      p.product_name,
      u.username user_username,
      u.realname user_realname,
      u.register_mobile user_mobile,
      u.id_no user_id_no,
      u.register_time,
      u.status user_status,
      u.user_type user_user_type,
      u.invite_code user_invite_code,
      u.recommend_invite_code user_recommend_invite_code
    FROM apply aly 
    LEFT JOIN product p ON p.id = aly.product_id
    LEFT JOIN user u ON u.id = aly.user_id
    WHERE 1=1 ${where}
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
      productType: foundProduct.product_type,
      page: filters.page,
      pageSize: filters.pageSize,
      total: totals[0].c,
    };
  }
}