import { Application } from 'egg';
import { vip_record_enabled_viewModel } from '../entity/db';

export default (app: Application): vip_record_enabled_viewModel => {
  return app.model.import('../entity/vip_record_enabled_view');
}