import { Application } from 'egg';
import { user_accountModel } from '../entity/db';

export default (app: Application): user_accountModel => {
  return app.model.import('../entity/user_account');
}