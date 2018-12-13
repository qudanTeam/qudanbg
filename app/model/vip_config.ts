import { Application } from 'egg';
import { vip_configModel } from '../entity/db';

export default (app: Application): vip_configModel => {
  return app.model.import('../entity/vip_config');
}