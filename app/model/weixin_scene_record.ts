import { Application } from 'egg';

export default (app: Application) => {
  return app.model.import('../entity/weixin_scene_record');
}