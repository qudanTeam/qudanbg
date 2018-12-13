import { Application } from 'egg';
import { bannerModel } from '../entity/db';

export default (app: Application): bannerModel => {
  return app.model.import('../entity/banner');
}