// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  admin:def.adminModel;
  agent_relation:def.agent_relationModel;
  agent_config:def.agent_configModel;
  agent:def.agentModel;
  admin_menu_permission:def.admin_menu_permissionModel;
  agent_view:def.agent_viewModel;
  banner:def.bannerModel;
  agents_view:def.agents_viewModel;
  apply:def.applyModel;
  category:def.categoryModel;
  customer:def.customerModel;
  message:def.messageModel;
  message_store:def.message_storeModel;
  menu_permission:def.menu_permissionModel;
  product:def.productModel;
  product_category_relation:def.product_category_relationModel;
  share_manager:def.share_managerModel;
  product_config:def.product_configModel;
  salary:def.salaryModel;
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
  user_share:def.user_shareModel;
  user_account:def.user_accountModel;
  vip_config:def.vip_configModel;
  weixin_binding:def.weixin_bindingModel;
  vip_record:def.vip_recordModel;
  vip_record_enabled_view:def.vip_record_enabled_viewModel;
  weixin_scene_record:def.weixin_scene_recordModel;
  weixin_scene_scan_log:def.weixin_scene_scan_logModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    admin: seq.import(path.join(__dirname, './admin')),
    agent_relation: seq.import(path.join(__dirname, './agent_relation')),
    agent_config: seq.import(path.join(__dirname, './agent_config')),
    agent: seq.import(path.join(__dirname, './agent')),
    admin_menu_permission: seq.import(path.join(__dirname, './admin_menu_permission')),
    agent_view: seq.import(path.join(__dirname, './agent_view')),
    banner: seq.import(path.join(__dirname, './banner')),
    agents_view: seq.import(path.join(__dirname, './agents_view')),
    apply: seq.import(path.join(__dirname, './apply')),
    category: seq.import(path.join(__dirname, './category')),
    customer: seq.import(path.join(__dirname, './customer')),
    message: seq.import(path.join(__dirname, './message')),
    message_store: seq.import(path.join(__dirname, './message_store')),
    menu_permission: seq.import(path.join(__dirname, './menu_permission')),
    product: seq.import(path.join(__dirname, './product')),
    product_category_relation: seq.import(path.join(__dirname, './product_category_relation')),
    share_manager: seq.import(path.join(__dirname, './share_manager')),
    product_config: seq.import(path.join(__dirname, './product_config')),
    salary: seq.import(path.join(__dirname, './salary')),
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
    user_share: seq.import(path.join(__dirname, './user_share')),
    user_account: seq.import(path.join(__dirname, './user_account')),
    vip_config: seq.import(path.join(__dirname, './vip_config')),
    weixin_binding: seq.import(path.join(__dirname, './weixin_binding')),
    vip_record: seq.import(path.join(__dirname, './vip_record')),
    vip_record_enabled_view: seq.import(path.join(__dirname, './vip_record_enabled_view')),
    weixin_scene_record: seq.import(path.join(__dirname, './weixin_scene_record')),
    weixin_scene_scan_log: seq.import(path.join(__dirname, './weixin_scene_scan_log')),
  };
  return tables;
};
