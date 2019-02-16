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
      p.product_type,
      MAX(aly.modify_time) modify_time, 
      COUNT(1) total
    FROM apply aly 
    LEFT JOIN product p ON p.id = aly.product_id 
    WHERE 1=1 ${where}
    GROUP BY p.id, p.product_name, p.product_type
    ORDER BY modify_time DESC
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
      where += ` AND aly.mobile LIKE '%${filters.user_mobile}%'`
    }

    if (filters.user_id_no) {
      where += ` AND aly.id_no LIKE '%${filters.user_id_no}%'`
    }

    if (filters.user_recommend_invite_code) {
      where += ` AND u.recommend_invite_code LIKE '%${filters.user_recommend_invite_code}%'`
    }

    if (filters.start_time) {
      where += ` AND aly.create_time >= '${filters.start_time}'`;
    }

    if (filters.end_time) {
      where += ` AND aly.create_time <= '${filters.end_time}'`;
    }

    if (filters.isPos) {
      where += ` AND pae.id IS NOT NULL`
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
      u.alipay_no alipay_no,
      u.user_type user_user_type,
      u.invite_code user_invite_code,
      u.recommend_invite_code user_recommend_invite_code,
      pae.id pae_id,
      pae.express_name express_delivery_name,
      pae.express_no express_delivery_no,
      pae.pos_no,
      pae.receiver recipient_name,
      pae.receiver_mobile recipient_phone,
      pae.address recipient_address,
      pae.region,
      pae.pay_order_no pay_no,
      pae.pay_price paid_amount,
      pae.deposit_status deposit_state,
      pae.deliver_status deliver_status,
      pae.modify_time paid_time

    FROM apply aly 
    LEFT JOIN product p ON p.id = aly.product_id
    LEFT JOIN pos_apply_ext pae ON pae.apply_id = aly.id
    LEFT JOIN user u ON u.id = aly.user_id
    WHERE 1=1 ${where}
    ORDER BY aly.create_time DESC
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

  async ship(id: number, values: any) {
    this.model.PosApplyExt.update({
      express_name: values.express_name,
      express_no: values.express_no,
      pos_no: values.pos_no,
      deliver_status: 2,
    }, {
      where: {
        id,
      },
    });

    return {
      id,
    }
  }

  async signing(id: number) {
    this.model.PosApplyExt.update({
      deliver_status: 3,
    }, {
      where: {
        id,
      },
    });

    return {
      id,
    }
  }
}