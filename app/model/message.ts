import { Application } from 'egg';

import { messageModel } from '../entity/db';

export default (app: Application): messageModel => {
  return app.model.import('../entity/message');
}