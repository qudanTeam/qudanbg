import { Application } from 'egg';
import { agent_viewModel } from '../entity/db';

export default (app: Application): agent_viewModel => {
  return app.model.import('../entity/agent_view');
}