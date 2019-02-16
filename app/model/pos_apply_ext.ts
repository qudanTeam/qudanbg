import { Application } from 'egg';

import { pos_apply_extModel } from '../entity/db';

export default (app: Application): pos_apply_extModel => {
  return app.model.import('../entity/pos_apply_ext');
}