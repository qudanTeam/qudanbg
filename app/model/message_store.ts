import { Application } from 'egg';

import { message_storeModel } from '../entity/db';

export default (app: Application): message_storeModel => {
  return app.model.import('../entity/message_store');
}