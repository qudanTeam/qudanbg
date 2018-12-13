import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  app.router.post('/login', app.controller.auth.login);
  app.router.post('/upload', app.controller.file.upload);
  app.router.put('/admins/permission', app.controller.admin.put_permission);
  app.router.resources('admins', '/admins', app.controller.admin);
  app.router.get('/users/:id/vipInfo', app.controller.user.showVipInfo);
  app.router.get('/users/:id/agentInfo', app.controller.user.showAgentInfo);
  app.router.resources('users', '/users', app.controller.user);
  app.router.resources('vipconfigs', '/vipconfigs', app.controller.vipConfigs);
  app.router.resources('banners', '/banners', app.controller.banner);
  app.router.resources('advistor', '/advistors', app.controller.customer);
  app.router.get('/agents/rewards', app.controller.agent.rewards);
  app.router.get('/agents/childs', app.controller.agent.childs);
  app.router.resources('agent', '/agents', app.controller.agent);
  app.router.resources('agent_config', "/agent_config", app.controller.agentConfig);
  app.router.resources('share_manager', "/share_manager", app.controller.shareManager);
};
