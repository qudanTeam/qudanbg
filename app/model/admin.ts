import { Application } from 'egg';

import { adminModel } from '../entity/db';

export default (app: Application): adminModel => {
  return app.model.import('../entity/admin');
}