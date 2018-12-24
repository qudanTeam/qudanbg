import { Application } from 'egg';
import { product_configModel } from '../entity/db';

export default (app: Application): product_configModel => {
  return app.model.import('../entity/product_config');
}