import { Application } from 'egg';
import { trade_typeModel } from '../entity/db';

export default (app: Application): trade_typeModel => {
  return app.model.import('../entity/trade_type');
}