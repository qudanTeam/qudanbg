import { Service, Context } from 'egg';
import sequelize = require('sequelize');
import { messageAttribute } from '../entity/db';

export default class Message extends Service {
  model: sequelize.Sequelize

  constructor(ctx: Context) {
    super(ctx);

    this.model = ctx.model;
  }

  async createMsg(msg) {

    const {
      user_ids,
      ...rest
    } = msg;

    const encodeUserIds = (user_ids) => {
      return JSON.stringify(user_ids);
    };

    const reply = await this.model.MessageStore.create({
      user_ids: encodeUserIds(user_ids),
      ...rest,
    });

    return {
      id: reply.id,
    }
  }

  async updateMsg(msg, id) {

    const {
      user_ids,
      ...rest
    } = msg;

    const encodeUserIds = (user_ids) => {
      return JSON.stringify(user_ids);
    };

    await this.model.MessageStore.update({
      user_ids: encodeUserIds(user_ids),
      ...rest,
    }, {
      where: {
        id,
      }
    });

    return {
      id,
    }
  }

  async findList(filter) {
    const { offset, limit } = this.ctx.helper.parsedPageFromParams(filter);
    
    const list = await this.model.MessageStore.findAll({
      offset,
      limit,
    });

    const decodeUserIds = (user_ids) => {
      return JSON.parse(user_ids);
    };

    for (const item of list) {
      item.user_ids = decodeUserIds(item.user_ids);
    }

    const total = await this.model.MessageStore.count();

    return {
      list,
      page: filter.page,
      pageSize: filter.pageSize,
      total,
    };
  }

  /**
   * 消息推送
   * @param id 
   */
  async push(id: number) {
    const foundOne = await this.model.MessageStore.findOne({
      where: {
        id,
      },
    });

    if (!foundOne) {
      this.ctx.throw(404, "not found");
      return
    }
    const decodeUserIds = (user_ids) => {
      return JSON.parse(user_ids);
    };
    const userIds = decodeUserIds(foundOne.user_ids);
    // const uids: any[] = userIds ? foundOne.user_ids.split(',') : [];
    const messages: messageAttribute[] = [];
    for (const idObj of userIds) {
      messages.push({
        id: 0,
        msg_title: foundOne.msg_title,
        msg_link: foundOne.msg_link,
        msg_content: foundOne.msg_content,
        msg_logo: foundOne.msg_logo,
        user_id: Number(idObj.key),
        is_user_delete: 0,
      });
    }

    await this.model.Message.bulkCreate(messages);

    return {
      ids: userIds,
    }
  }
}