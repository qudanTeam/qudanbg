
import { Controller } from 'egg';
import * as moment from 'moment';
import xlsx from 'node-xlsx';


export function isFinanceAuth(record) {
  // const utype = findUserType(record);

  if (+record.finance_status === 3) {
    return true;
  }

  return false;
  
}

export function isRealnameAuth(record) {
  // const utype = findUserType(record);

  if (+record.status === 3) {
    return true;
  }

  return false;
}

export default class ExportController extends Controller {
  async exportOrder() {
    const { ctx } = this;

    const {
      page = 0,
      pageSize = 15,
      ...rest
    } = ctx.request.query;

    const result = await ctx.service.order.findList({ page, pageSize: 9999, ...rest });

    const title = [
      '订单编号',
      '订单状态',
      '订单类型',
      '商品名称',
      '受益人编号',
      '受益人名称',
      '受益人手机号',
      '申请时间',
      '申请人编号',
      '申请人姓名',
      '申请人手机号',
      '申请人身份证',
      '支付人用户编号',
      '支付流水号',
      '支付金额',
      '押金状态',
    ];

    const data = [title];

    const OrderStatus = ['查询中', '审核中', '已通过', '已拒绝'];
    const ProductType = ['未知', '信用卡', '贷款', 'POS机器'];



    if (Array.isArray(result)) {
      for (const up of result) {
        data.push([
          up.apply_id_code || '--',
          OrderStatus[up.status || 0] || '--',
          ProductType[up.product_type || 0] || '--',
          up.product_name || '--',
          up.invite_code || '--',
          up.syr_realname || '--',
          up.syr_register_mobile || '--',
          moment(up.create_time).utcOffset(-8).add(1, 'days').format('YYYY-MM-DD HH:mm:ss') || '--',
          up.user_invite_code || '--',
          up.name || '--',
          up.mobile || '--',
          up.id_no || '--',
          up.pos_apply_invite_code || '--',
          up.pay_order_no || '--',
          up.pay_price || '--',
          +(up.deposit_status || 0) === 3 ? '已退还' : '未退还',
        ])
      }

      const buffer = xlsx.build([{name: "orders", data: data}]); // Returns a buffer

      // console.log(buffer, 'buffer');
      this.ctx.response.attachment(`订单列表.xlsx`);
      this.ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      ctx.body = buffer;
      return;
    }

    ctx.body = '导出错误';
    return;
  }

  async exportUser() {
    const { ctx, service } = this;
    const {
      page,
      pageSize,
      ...rest
    } = ctx.request.query;
    // console.log(rest);
    const reply = await service.user.findList({ page: 0, pageSize: 999999, ...rest });

    const { list } = reply;

    const title = [
      '用户编号',
      '手机号',
      '微信号',
      '邀请人数',
      '账户余额',
      '用户类型',
      '认证类型',
      '真实姓名',
      '身份证号码',
      '支付宝账户',
      'VIP等级',
      '推荐人',
      '注册时间',
      '最近登录时间',
    ];

    const data = [title];

    const UserType = ['默认身份', 'vip', '代理', '混合身份', '内部账户'];
    const AuthenticateType = ['未认证', '实名认证', '财务认证'];
    const VipLevel = ['--', 'VIP1', 'VIP2', 'VIP3'];

    if (Array.isArray(list)) {
      for (const item of list) {
        let authType: string[] = [];
        let authIndex = 0;

        if (+item.status === 3) {
          authIndex = 1;
          authType.push(AuthenticateType[authIndex]);
        }

        if (+item.finance_status === 3) {
          authIndex = 2;
          authType.push(AuthenticateType[authIndex]);
        }

        if (authType.length <= 0) {
          authType.push('未认证');
        }

        data.push([
          item.invite_code || '--',
          item.register_mobile || '--',
          item.wechat_name || '--',
          item.invite_num || '--',
          item.balance || '--',
          UserType[item.user_type] || '--',
          authType.join(','),
          isRealnameAuth(item) ? item.realname : '--',
          isRealnameAuth(item) ? item.id_no : '--',
          isFinanceAuth(item) ? item.alipay_no : '--',
          VipLevel[item.vip_level] || '--',
          item.recommend_invite_code || '--',
          moment(item.register_time).utcOffset(-8).add(1, 'days').format("YYYY-MM-DD HH:mm:ss"),
          moment(item.last_login_time).utcOffset(-8).add(1, 'days').format("YYYY-MM-DD HH:mm:ss"),
        ]);
      }

      const buffer = xlsx.build([{name: "users", data: data}]); // Returns a buffer

      // console.log(buffer, 'buffer');
      this.ctx.response.attachment(`用户列表.xlsx`);
      this.ctx.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      ctx.body = buffer;
      return;
    }

    ctx.body = '导出错误';
    return;

    // ctx.body = reply;
  }
}