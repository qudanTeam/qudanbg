// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  agent_config:def.agent_configModel;
  agent_relation:def.agent_relationModel;
  admin:def.adminModel;
  admin_menu_permission:def.admin_menu_permissionModel;
  agent:def.agentModel;
  agent_view:def.agent_viewModel;
  agents_view:def.agents_viewModel;
  apply:def.applyModel;
  banner:def.bannerModel;
  category:def.categoryModel;
  customer:def.customerModel;
  customer_pdc_view:def.customer_pdc_viewModel;
  menu_permission:def.menu_permissionModel;
  message:def.messageModel;
  message_store:def.message_storeModel;
  order_view:def.order_viewModel;
  pay_order:def.pay_orderModel;
  product:def.productModel;
  product_category_relation:def.product_category_relationModel;
  product_config:def.product_configModel;
  product_links:def.product_linksModel;
  salary:def.salaryModel;
  share_manager:def.share_managerModel;
  sms_send_record:def.sms_send_recordModel;
  sys_log:def.sys_logModel;
  sys_menu:def.sys_menuModel;
  sys_role:def.sys_roleModel;
  sys_user_role:def.sys_user_roleModel;
  trade_type:def.trade_typeModel;
  sys_role_menu:def.sys_role_menuModel;
  sys_task:def.sys_taskModel;
  sys_user:def.sys_userModel;
  user:def.userModel;
  user_account:def.user_accountModel;
  user_share:def.user_shareModel;
  user_share_qr_code:def.user_share_qr_codeModel;
  vip_config:def.vip_configModel;
  vip_record:def.vip_recordModel;
  vip_record_enabled_view:def.vip_record_enabled_viewModel;
  weixin_binding:def.weixin_bindingModel;
  weixin_scene_scan_log:def.weixin_scene_scan_logModel;
  weixin_scene_record:def.weixin_scene_recordModel;
  weixin_user_temp:def.weixin_user_tempModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    agent_config: seq.import(path.join(__dirname, './agent_config')),
    agent_relation: seq.import(path.join(__dirname, './agent_relation')),
    admin: seq.import(path.join(__dirname, './admin')),
    admin_menu_permission: seq.import(path.join(__dirname, './admin_menu_permission')),
    agent: seq.import(path.join(__dirname, './agent')),
    agent_view: seq.import(path.join(__dirname, './agent_view')),
    agents_view: seq.import(path.join(__dirname, './agents_view')),
    apply: seq.import(path.join(__dirname, './apply')),
    banner: seq.import(path.join(__dirname, './banner')),
    category: seq.import(path.join(__dirname, './category')),
    customer: seq.import(path.join(__dirname, './customer')),
    customer_pdc_view: seq.import(path.join(__dirname, './customer_pdc_view')),
    menu_permission: seq.import(path.join(__dirname, './menu_permission')),
    message: seq.import(path.join(__dirname, './message')),
    message_store: seq.import(path.join(__dirname, './message_store')),
    order_view: seq.import(path.join(__dirname, './order_view')),
    pay_order: seq.import(path.join(__dirname, './pay_order')),
    product: seq.import(path.join(__dirname, './product')),
    product_category_relation: seq.import(path.join(__dirname, './product_category_relation')),
    product_config: seq.import(path.join(__dirname, './product_config')),
    product_links: seq.import(path.join(__dirname, './product_links')),
    salary: seq.import(path.join(__dirname, './salary')),
    share_manager: seq.import(path.join(__dirname, './share_manager')),
    sms_send_record: seq.import(path.join(__dirname, './sms_send_record')),
    sys_log: seq.import(path.join(__dirname, './sys_log')),
    sys_menu: seq.import(path.join(__dirname, './sys_menu')),
    sys_role: seq.import(path.join(__dirname, './sys_role')),
    sys_user_role: seq.import(path.join(__dirname, './sys_user_role')),
    trade_type: seq.import(path.join(__dirname, './trade_type')),
    sys_role_menu: seq.import(path.join(__dirname, './sys_role_menu')),
    sys_task: seq.import(path.join(__dirname, './sys_task')),
    sys_user: seq.import(path.join(__dirname, './sys_user')),
    user: seq.import(path.join(__dirname, './user')),
    user_account: seq.import(path.join(__dirname, './user_account')),
    user_share: seq.import(path.join(__dirname, './user_share')),
    user_share_qr_code: seq.import(path.join(__dirname, './user_share_qr_code')),
    vip_config: seq.import(path.join(__dirname, './vip_config')),
    vip_record: seq.import(path.join(__dirname, './vip_record')),
    vip_record_enabled_view: seq.import(path.join(__dirname, './vip_record_enabled_view')),
    weixin_binding: seq.import(path.join(__dirname, './weixin_binding')),
    weixin_scene_scan_log: seq.import(path.join(__dirname, './weixin_scene_scan_log')),
    weixin_scene_record: seq.import(path.join(__dirname, './weixin_scene_record')),
    weixin_user_temp: seq.import(path.join(__dirname, './weixin_user_temp')),
  };
  return tables;
};
