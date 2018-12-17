// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  admin:def.adminModel;
  agent_config:def.agent_configModel;
  admin_menu_permission:def.admin_menu_permissionModel;
  agent:def.agentModel;
  agent_relation:def.agent_relationModel;
  agent_view:def.agent_viewModel;
  agents_view:def.agents_viewModel;
  apply:def.applyModel;
  banner:def.bannerModel;
  category:def.categoryModel;
  customer:def.customerModel;
  menu_permission:def.menu_permissionModel;
  message:def.messageModel;
  message_store:def.message_storeModel;
  product:def.productModel;
  product_category_relation:def.product_category_relationModel;
  product_config:def.product_configModel;
  salary:def.salaryModel;
  share_manager:def.share_managerModel;
  sms_send_record:def.sms_send_recordModel;
  sys_log:def.sys_logModel;
  sys_menu:def.sys_menuModel;
  sys_role:def.sys_roleModel;
  sys_role_menu:def.sys_role_menuModel;
  sys_task:def.sys_taskModel;
  sys_user:def.sys_userModel;
  sys_user_role:def.sys_user_roleModel;
  trade_type:def.trade_typeModel;
  user:def.userModel;
  user_account:def.user_accountModel;
  user_share:def.user_shareModel;
  vip_config:def.vip_configModel;
  vip_record:def.vip_recordModel;
  vip_record_enabled_view:def.vip_record_enabled_viewModel;
  weixin_binding:def.weixin_bindingModel;
  weixin_scene_record:def.weixin_scene_recordModel;
  weixin_scene_scan_log:def.weixin_scene_scan_logModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    admin: seq.import(path.join(__dirname, './admin')),
    agent_config: seq.import(path.join(__dirname, './agent_config')),
    admin_menu_permission: seq.import(path.join(__dirname, './admin_menu_permission')),
    agent: seq.import(path.join(__dirname, './agent')),
    agent_relation: seq.import(path.join(__dirname, './agent_relation')),
    agent_view: seq.import(path.join(__dirname, './agent_view')),
    agents_view: seq.import(path.join(__dirname, './agents_view')),
    apply: seq.import(path.join(__dirname, './apply')),
    banner: seq.import(path.join(__dirname, './banner')),
    category: seq.import(path.join(__dirname, './category')),
    customer: seq.import(path.join(__dirname, './customer')),
    menu_permission: seq.import(path.join(__dirname, './menu_permission')),
    message: seq.import(path.join(__dirname, './message')),
    message_store: seq.import(path.join(__dirname, './message_store')),
    product: seq.import(path.join(__dirname, './product')),
    product_category_relation: seq.import(path.join(__dirname, './product_category_relation')),
    product_config: seq.import(path.join(__dirname, './product_config')),
    salary: seq.import(path.join(__dirname, './salary')),
    share_manager: seq.import(path.join(__dirname, './share_manager')),
    sms_send_record: seq.import(path.join(__dirname, './sms_send_record')),
    sys_log: seq.import(path.join(__dirname, './sys_log')),
    sys_menu: seq.import(path.join(__dirname, './sys_menu')),
    sys_role: seq.import(path.join(__dirname, './sys_role')),
    sys_role_menu: seq.import(path.join(__dirname, './sys_role_menu')),
    sys_task: seq.import(path.join(__dirname, './sys_task')),
    sys_user: seq.import(path.join(__dirname, './sys_user')),
    sys_user_role: seq.import(path.join(__dirname, './sys_user_role')),
    trade_type: seq.import(path.join(__dirname, './trade_type')),
    user: seq.import(path.join(__dirname, './user')),
    user_account: seq.import(path.join(__dirname, './user_account')),
    user_share: seq.import(path.join(__dirname, './user_share')),
    vip_config: seq.import(path.join(__dirname, './vip_config')),
    vip_record: seq.import(path.join(__dirname, './vip_record')),
    vip_record_enabled_view: seq.import(path.join(__dirname, './vip_record_enabled_view')),
    weixin_binding: seq.import(path.join(__dirname, './weixin_binding')),
    weixin_scene_record: seq.import(path.join(__dirname, './weixin_scene_record')),
    weixin_scene_scan_log: seq.import(path.join(__dirname, './weixin_scene_scan_log')),
  };
  return tables;
};
