import { Application } from 'egg';
import { agentModel } from '../entity/db';

export default (app: Application): agentModel => {
  return app.model.import('../entity/agent');
}