import { Application } from 'egg';
import { product_category_relationModel } from '../entity/db';

export default (app: Application): product_category_relationModel => {
  return app.model.import('../entity/product_category_relation');
}