import { Application } from 'egg';

import { customerModel } from '../entity/db';

export default (app: Application): customerModel => {
  return app.model.import('../entity/customer');
}