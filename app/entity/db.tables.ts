// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  admin:def.adminModel;
  admin_menu_permission:def.admin_menu_permissionModel;
  agent_config:def.agent_configModel;
  agent_relation:def.agent_relationModel;
  agent:def.agentModel;
  agent_view:def.agent_viewModel;
  agents_view:def.agents_viewModel;
  banner:def.bannerModel;
  apply:def.applyModel;
  category:def.categoryModel;
  customer:def.customerModel;
  customer_pdc_view:def.customer_pdc_viewModel;
  menu_permission:def.menu_permissionModel;
  message:def.messageModel;
  message_store:def.message_storeModel;
  order_view:def.order_viewModel;
  product_category_relation:def.product_category_relationModel;
  salary:def.salaryModel;
  product_config:def.product_configModel;
  product:def.productModel;
  share_manager:def.share_managerModel;
  sms_send_record:def.sms_send_recordModel;
  sys_menu:def.sys_menuModel;
  sys_log:def.sys_logModel;
  sys_role:def.sys_roleModel;
  sys_role_menu:def.sys_role_menuModel;
  sys_task:def.sys_taskModel;
  sys_user:def.sys_userModel;
  sys_user_role:def.sys_user_roleModel;
  trade_type:def.trade_typeModel;
  user:def.userModel;
  vip_config:def.vip_configModel;
  user_share_qr_code:def.user_share_qr_codeModel;
  user_account:def.user_accountModel;
  user_share:def.user_shareModel;
  vip_record:def.vip_recordModel;
  vip_record_enabled_view:def.vip_record_enabled_viewModel;
  weixin_scene_record:def.weixin_scene_recordModel;
  weixin_binding:def.weixin_bindingModel;
  weixin_scene_scan_log:def.weixin_scene_scan_logModel;
  weixin_user_temp:def.weixin_user_tempModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    admin: seq.import(path.join(__dirname, './admin')),
    admin_menu_permission: seq.import(path.join(__dirname, './admin_menu_permission')),
    agent_config: seq.import(path.join(__dirname, './agent_config')),
    agent_relation: seq.import(path.join(__dirname, './agent_relation')),
    agent: seq.import(path.join(__dirname, './agent')),
    agent_view: seq.import(path.join(__dirname, './agent_view')),
    agents_view: seq.import(path.join(__dirname, './agents_view')),
    banner: seq.import(path.join(__dirname, './banner')),
    apply: seq.import(path.join(__dirname, './apply')),
    category: seq.import(path.join(__dirname, './category')),
    customer: seq.import(path.join(__dirname, './customer')),
    customer_pdc_view: seq.import(path.join(__dirname, './customer_pdc_view')),
    menu_permission: seq.import(path.join(__dirname, './menu_permission')),
    message: seq.import(path.join(__dirname, './message')),
    message_store: seq.import(path.join(__dirname, './message_store')),
    order_view: seq.import(path.join(__dirname, './order_view')),
    product_category_relation: seq.import(path.join(__dirname, './product_category_relation')),
    salary: seq.import(path.join(__dirname, './salary')),
    product_config: seq.import(path.join(__dirname, './product_config')),
    product: seq.import(path.join(__dirname, './product')),
    share_manager: seq.import(path.join(__dirname, './share_manager')),
    sms_send_record: seq.import(path.join(__dirname, './sms_send_record')),
    sys_menu: seq.import(path.join(__dirname, './sys_menu')),
    sys_log: seq.import(path.join(__dirname, './sys_log')),
    sys_role: seq.import(path.join(__dirname, './sys_role')),
    sys_role_menu: seq.import(path.join(__dirname, './sys_role_menu')),
    sys_task: seq.import(path.join(__dirname, './sys_task')),
    sys_user: seq.import(path.join(__dirname, './sys_user')),
    sys_user_role: seq.import(path.join(__dirname, './sys_user_role')),
    trade_type: seq.import(path.join(__dirname, './trade_type')),
    user: seq.import(path.join(__dirname, './user')),
    vip_config: seq.import(path.join(__dirname, './vip_config')),
    user_share_qr_code: seq.import(path.join(__dirname, './user_share_qr_code')),
    user_account: seq.import(path.join(__dirname, './user_account')),
    user_share: seq.import(path.join(__dirname, './user_share')),
    vip_record: seq.import(path.join(__dirname, './vip_record')),
    vip_record_enabled_view: seq.import(path.join(__dirname, './vip_record_enabled_view')),
    weixin_scene_record: seq.import(path.join(__dirname, './weixin_scene_record')),
    weixin_binding: seq.import(path.join(__dirname, './weixin_binding')),
    weixin_scene_scan_log: seq.import(path.join(__dirname, './weixin_scene_scan_log')),
    weixin_user_temp: seq.import(path.join(__dirname, './weixin_user_temp')),
  };
  return tables;
};
