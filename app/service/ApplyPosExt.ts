import { Service, Context } from 'egg';
import sequelize = require('sequelize');

export default class ApplyPosExt extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx)

    this.model = ctx.model
  }

  // 获取支付列表
  async PosApplyList(filters: any) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);

    let sql = `
    SELECT 
    pae.*,
    aly.create_time apply_create_time,
    u.invite_code user_invite_code,
    aly.apply_id_code
    FROM pos_apply_ext pae
    LEFT JOIN apply aly ON aly.id = pae.apply_id
    LEFT JOIN user u ON u.id = pae.user_id
    WHERE apply_id IS NOT NULL
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
}