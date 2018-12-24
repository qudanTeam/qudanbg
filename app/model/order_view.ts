import { Application } from 'egg';

import { order_viewModel } from '../entity/db';

export default (app: Application): order_viewModel => {
  return app.model.import('../entity/order_view');
}