
import { Controller } from 'egg';
import * as moment from 'moment';
import xlsx from 'node-xlsx';

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
}