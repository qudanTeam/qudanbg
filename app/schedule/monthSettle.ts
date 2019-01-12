import { Subscription } from 'egg';
import moment = require('moment');
import { trade_typeAttribute } from '../entity/db';

export default class MonthSettle extends Subscription {

  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      // cron: '0 0 0 1 * *',
      interval: '10s', // 1 分钟间隔
      type: 'all',
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    console.log('开始执行定时月度结算任务，结算上月的阶梯奖励');
    const { model } = this.ctx;
    // const month = moment().startOf("month").subtract(1000);
    const month = moment().startOf("month")
    console.log(month.format("YYYY-MM-DD HH:mm:ss"));
    const tmonth = month.format("YYYYMM")
    
    // tmonth.subtract("minute");
    // const apiConfig = await model.query()
    const sql = `
    SELECT * FROM statistic_ladder sl WHERE sl.tmonth=${tmonth}
    `;
    const list = await model.query(sql, {
      type: model.QueryTypes.SELECT,
    });

    const foundAll = await model.TradeType.findAll({
      where: {
        trade_type: 5,
      }
    });

    const userTradeTypeMapper: any = {}

    for (const item of foundAll) {
      if (item.user_id) {
        userTradeTypeMapper[`${item.user_id}_${item.product_id}`] = item;
      }
    }

    const tradeTypes: trade_typeAttribute[] = []
    const updateTradeTypes: any[] = []
    for (const item of list) {
      
      try {

        // 计算阶梯奖励
        let price = 0;
        // 奖励人
        const user_id = item.recommend_invite_id;

        // 基础工资 
        let baseSalary = 0;
        if (item.product_type === 1) {
          baseSalary = (item.base_salary || 0) * (item.total);
        } else {
          baseSalary = (item.base_salary || 0) * (item.loan_money || 0) * 10000;
        }

        const {
          product_type,
          // a_limit = 0,
          // b_limit = 0,
          c_limit = 0,
          // a_begin = 0,
          b_begin = 0,
          c_start = 0,
          a_level_reward = 0,
          b_level_reward = 0,
          c_level_reward = 0,
          loan_money = 0,
          total = 0,
        } = item;
        
        let level = 0;
        if (product_type === 2) {
          const maxC = (c_limit * 10000 - c_start * 10000) * (b_level_reward/100);
          const maxB = (c_start * 10000 - b_begin * 10000) * (c_level_reward/100);

          level = maxC + maxB;

          if (loan_money <= c_start) {
            level = level - maxC;
          }

          if (loan_money <= b_begin) {
            level = level - maxB;
          }
        } else {
          const maxC = (c_limit - c_start) * (b_level_reward - a_level_reward)
          const maxB = (c_start - b_begin) * (c_level_reward - a_level_reward)

          level = maxC + maxB;

          if (total <= c_start) {
            level = level - maxC;
          }

          if (total <= b_begin) {
            level = level - maxB;
          }
        }

        // price = level + baseSalary;
        price = level;

        console.log("产品价格", price);

        if (userTradeTypeMapper[`${item.recommend_invite_id}_${item.product_id}`]) {
          updateTradeTypes.push({
            // id: 0,
            trade_type: 5,
            user_id: user_id,
            price,
            product_id: item.product_id,
            account: item.account,
            create_time: new Date(),
            modify_time: new Date(),
            status: 1,
            send_status: 1,
            base_price: baseSalary,
            vip_price: 0,
            agent_level: 0,
            agent_rate: 0,
          })
          continue;
        }
        
        tradeTypes.push({
          id: 0,
          trade_type: 5,
          user_id: user_id,
          product_id: item.product_id,
          price,
          account: item.account,
          create_time: new Date(),
          modify_time: new Date(),
          status: 1,
          send_status: 1,
          base_price: baseSalary,
          vip_price: 0,
          agent_level: 0,
          agent_rate: 0,
        })
      } catch (e) {
        console.log('一条资料出错了');

        continue;
      }
    }

    model.transaction((t) => {
      const limit = 1000;

      const num = Math.ceil(tradeTypes.length / limit);
      const trades: any[] = [];
      for (let i = 0; i < num; i++) {
        let startIndex = i * limit;
        let endIndex = startIndex + limit;
        if (endIndex > tradeTypes.length) {
          endIndex = tradeTypes.length;
        }
        trades.push(model.TradeType.bulkCreate(tradeTypes.slice(startIndex,endIndex), {
          transaction: t,
        }));
      }

      for (const uitem of updateTradeTypes) {
        if (!uitem.user_id) {
          continue;
        }
        trades.push(model.TradeType.update(uitem, {
          where: {
            user_id: uitem.user_id,
            trade_type: 5,
            product_id: uitem.product_id,
            // product_id: 
          },
          transaction: t,
        }));
      }

      return Promise.all(trades);
    }).then(() => {
      console.log("已经提交")
    }).catch(() => {
      console.log("出错了 ====");
    });
  }
}