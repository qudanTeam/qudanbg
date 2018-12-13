import { Application } from 'egg';
import { share_managerModel } from '../entity/db';

export default (app: Application): share_managerModel => {
  return app.model.import('../entity/share_manager');
}