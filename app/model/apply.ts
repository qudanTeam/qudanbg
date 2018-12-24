import { Application } from 'egg';

import { applyModel } from '../entity/db';

export default (app: Application): applyModel => {
  return app.model.import('../entity/apply');
}