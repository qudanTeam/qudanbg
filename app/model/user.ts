import { Application } from 'egg';
import { userModel } from '../entity/db';

export default (app: Application): userModel => {
  return app.model.import('../entity/user');
}