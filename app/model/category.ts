import { Application } from 'egg';
import { categoryModel } from '../entity/db';

export default (app: Application): categoryModel => {
  return app.model.import('../entity/category');
}