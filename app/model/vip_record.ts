import { Application } from 'egg';
import { vip_recordModel } from '../entity/db';

export default (app: Application): vip_recordModel => {
  return app.model.import('../entity/vip_record');
}