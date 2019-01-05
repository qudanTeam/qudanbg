import { Service, Context } from 'egg';
import sequelize = require('sequelize');

export default class Agent extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx);
    this.model = ctx.model;
  }

  async findList(filters: any) {
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filters);

    const condition = {};

    if (filters.user_id) {
      condition['user_id'] = {
        [this.model.Op.like]: `%${filters.user_id}%`,
      };
    }

    if (filters.invite_code) {
      condition['invite_code'] = {
        [this.model.Op.like]: `%${filters.invite_code}%`,
      }
    }

    if (filters.level && filters.level !== 'all') {
      condition['level'] = filters.level;
    }
    
    const list = await this.model.AgentView.findAll({
      offset,
      limit,
      where: condition,
    });

    const total = await this.model.AgentView.count({
      where: condition,
    });

    return {
      list,
      page: filters.page,
      pageSize: filters.pageSize,
      total,
    };
  }

  async findChildReward(id: number, filters: any) {

    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filters);

    let sql = `
    SELECT tt.*, al.user_id apply_user_id, agv.parent_user_id, prd.product_name product_name
    FROM trade_type tt LEFT JOIN apply al ON al.id = tt.apply_id 
    LEFT JOIN product prd ON prd.id = al.product_id
    INNER JOIN (
      SELECT * FROM agents_view av WHERE av.parent_agent_id = :id
      UNION 
      SELECT agvt.* FROM agents_view agvt 
      LEFT JOIN agents_view pag ON agvt.parent_agent_id = pag.id WHERE pag.parent_agent_id = :id
    ) AS agv ON agv.user_id = al.user_id WHERE 1=1
    `

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

  async findChilds(id: number, filters: any) {
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filters);
    let sql = `
    SELECT agv.parent_agent_id, agv.parent_user_id, agv.id a_agent_id, agv.user_id user_id, u.* 
    FROM (
      SELECT * FROM agents_view av WHERE av.parent_agent_id = :id
      UNION 
      SELECT agvt.* FROM agents_view agvt 
      LEFT JOIN agents_view pag ON agvt.parent_agent_id = pag.id WHERE pag.parent_agent_id = :id
    ) AS agv 
    LEFT JOIN user u ON u.id = agv.user_id WHERE 1=1
    `

    // if (filters.parent_user_id) {
    //   sql += ` AND agv.parent_user_id = ${filters.parent_user_id}`;
    // }

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
}