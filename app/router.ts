import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  app.router.post('/login', app.controller.auth.login);
  app.router.post('/upload', app.controller.file.upload);
  app.router.put('/admins/permission', app.controller.admin.put_permission);
  app.router.put('/admins/password/:id', app.controller.admin.updatePassword);
  app.router.resources('admins', '/admins', app.controller.admin);
  app.router.get('/users/search', app.controller.user.searchUser);
  app.router.get('/users/:id/vipInfo', app.controller.user.showVipInfo);
  app.router.get('/users/:id/agentInfo', app.controller.user.showAgentInfo);
  app.router.resources('users', '/users', app.controller.user);
  app.router.resources('vipconfigs', '/vipconfigs', app.controller.vipConfigs);
  app.router.resources('banners', '/banners', app.controller.banner);
  app.router.get('/advistors/search', app.controller.customer.search);
  app.router.resources('advistor', '/advistors', app.controller.customer);
  app.router.get('/agents/rewards', app.controller.agent.rewards);
  app.router.get('/agents/childs', app.controller.agent.childs);
  app.router.resources('agent', '/agents', app.controller.agent);
  app.router.resources('agent_config', "/agent_config", app.controller.agentConfig);
  app.router.get('/share_manager/search_products', app.controller.shareManager.searchProducts);
  app.router.resources('share_manager', "/share_manager", app.controller.shareManager);
  app.router.post("/message_store/push/:id", app.controller.message.push);
  app.router.resources('message_store', "/message_store", app.controller.message);
  app.router.put('/orders/:id/pass', app.controller.order.passOne);
  app.router.put('/orders/:id/refuse', app.controller.order.refuseOne);
  app.router.resources('orders', '/orders', app.controller.order);
  app.router.get('/applys/:id/trades', app.controller.apply.trades);
  app.router.resources('applys', '/applys', app.controller.apply);
  app.router.resources('categories', '/categories', app.controller.category);
  app.router.resources('product_configs', '/product_configs', app.controller.productConfig);
  app.router.resources('product', '/products', app.controller.product);
  app.router.get('/categories/search', app.controller.category.search);
};
