import { Controller } from 'egg';

export default class FinancialController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { page = 0, pageSize = 15 } = ctx.request.query;
    const reply = await service.tradeType.findList({
      page,
      pageSize
    });

    ctx.response.body = reply;
  }

  async monthReport() {
    const { ctx, service } = this;
    const { page = 0, pageSize = 15 } = ctx.request.query;
    const reply = await service.tradeType.findMonthReport({
      page,
      pageSize
    });

    ctx.response.body = reply;
  }

  async findSalaryList() {
    const { ctx, service } = this;
    const { page = 0, pageSize = 15 } = ctx.request.query;
    const reply = await service.tradeType.findSalaryList({
      page,
      pageSize
    });

    ctx.response.body = reply;
  }

  async passOneSalary() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const reply = await service.tradeType.passSalary(id);

    ctx.response.body = reply;
  }

  async refuseOneSalary() {
    const { ctx, service } = this;
    const { id } = ctx.params;
    const { msg } = ctx.request.body;
    const reply = await service.tradeType.refuseSalary(id, msg);

    ctx.response.body = reply;
  }

}