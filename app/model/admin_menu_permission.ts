import { Application } from 'egg';

export default (app: Application) => {
  return app.model.import('../entity/admin_menu_permission');
}