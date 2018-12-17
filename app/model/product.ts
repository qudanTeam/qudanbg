import { Application } from 'egg';

import { productModel } from '../entity/db';

export default (app: Application): productModel => {
  return app.model.import('../entity/product');
}