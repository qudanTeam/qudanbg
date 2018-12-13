import { Application } from 'egg';
import { agent_configModel } from '../entity/db';

export default (app: Application): agent_configModel => {
  return app.model.import('../entity/agent_config');
}