import { Application } from 'egg';
import { agents_viewModel } from '../entity/db';

export default (app: Application): agents_viewModel => {
  return app.model.import('../entity/agents_view');
}