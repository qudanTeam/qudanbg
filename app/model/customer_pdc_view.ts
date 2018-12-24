import { Application } from 'egg';

import { customer_pdc_viewModel } from '../entity/db';

export default (app: Application): customer_pdc_viewModel => {
  return app.model.import('../entity/customer_pdc_view');
}