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

    if (filters.level) {
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

  async findChildReward(filters: any) {

    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filters);

    let sql = `
    SELECT tt.*, al.user_id apply_user_id, relate.parent_user_id 
    FROM trade_type tt LEFT JOIN apply al ON al.id = tt.apply_id 
    LEFT JOIN (SELECT parent_user_id, user_id FROM agents_view) relate ON relate.user_id = al.user_id WHERE 1=1
    `

    if (filters.parent_user_id) {
      sql += ` AND relate.parent_user_id = ${filters.parent_user_id}`;
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
      page: filters.page,
      pageSize: filters.pageSize,
      total: totals[0].c,
    };
  }

  async findChilds(filters: any) {
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filters);
    let sql = `
    SELECT agv.parent_agent_id, agv.parent_user_id, agv.id a_agent_id, agv.user_id user_id, u.* FROM agents_view agv 
    LEFT JOIN user u ON u.id = agv.user_id WHERE 1=1
    `

    if (filters.parent_user_id) {
      sql += ` AND agv.parent_user_id = ${filters.parent_user_id}`;
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
      page: filters.page,
      pageSize: filters.pageSize,
      total: totals[0].c,
    };
  }
}