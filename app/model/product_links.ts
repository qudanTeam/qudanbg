import { Application } from 'egg';
import { product_linksModel } from '../entity/db';

export default (app: Application): product_linksModel => {
  return app.model.import('../entity/product_links');
}