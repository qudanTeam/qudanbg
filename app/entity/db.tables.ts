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
  agents_view:def.agents_viewModel;
  apply:def.applyModel;
  agent_view:def.agent_viewModel;
  bank_query:def.bank_queryModel;
  banner:def.bannerModel;
  category:def.categoryModel;
  customer:def.customerModel;
  customer_pdc_view:def.customer_pdc_viewModel;
  menu_permission:def.menu_permissionModel;
  message:def.messageModel;
  message_store:def.message_storeModel;
  pay_order:def.pay_orderModel;
  pos_apply_ext:def.pos_apply_extModel;
  order_view:def.order_viewModel;
  product:def.productModel;
  product_category_relation:def.product_category_relationModel;
  product_config:def.product_configModel;
  share_manager:def.share_managerModel;
  product_links:def.product_linksModel;
  sms_send_record:def.sms_send_recordModel;
  user:def.userModel;
  trade_type:def.trade_typeModel;
  user_account:def.user_accountModel;
  statistic_ladder:def.statistic_ladderModel;
  user_share:def.user_shareModel;
  vip_record_enabled_view:def.vip_record_enabled_viewModel;
  vip_config:def.vip_configModel;
  user_share_qr_code:def.user_share_qr_codeModel;
  vip_record:def.vip_recordModel;
  weixin_binding:def.weixin_bindingModel;
  weixin_scene_record:def.weixin_scene_recordModel;
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
    agents_view: seq.import(path.join(__dirname, './agents_view')),
    apply: seq.import(path.join(__dirname, './apply')),
    agent_view: seq.import(path.join(__dirname, './agent_view')),
    bank_query: seq.import(path.join(__dirname, './bank_query')),
    banner: seq.import(path.join(__dirname, './banner')),
    category: seq.import(path.join(__dirname, './category')),
    customer: seq.import(path.join(__dirname, './customer')),
    customer_pdc_view: seq.import(path.join(__dirname, './customer_pdc_view')),
    menu_permission: seq.import(path.join(__dirname, './menu_permission')),
    message: seq.import(path.join(__dirname, './message')),
    message_store: seq.import(path.join(__dirname, './message_store')),
    pay_order: seq.import(path.join(__dirname, './pay_order')),
    pos_apply_ext: seq.import(path.join(__dirname, './pos_apply_ext')),
    order_view: seq.import(path.join(__dirname, './order_view')),
    product: seq.import(path.join(__dirname, './product')),
    product_category_relation: seq.import(path.join(__dirname, './product_category_relation')),
    product_config: seq.import(path.join(__dirname, './product_config')),
    share_manager: seq.import(path.join(__dirname, './share_manager')),
    product_links: seq.import(path.join(__dirname, './product_links')),
    sms_send_record: seq.import(path.join(__dirname, './sms_send_record')),
    user: seq.import(path.join(__dirname, './user')),
    trade_type: seq.import(path.join(__dirname, './trade_type')),
    user_account: seq.import(path.join(__dirname, './user_account')),
    statistic_ladder: seq.import(path.join(__dirname, './statistic_ladder')),
    user_share: seq.import(path.join(__dirname, './user_share')),
    vip_record_enabled_view: seq.import(path.join(__dirname, './vip_record_enabled_view')),
    vip_config: seq.import(path.join(__dirname, './vip_config')),
    user_share_qr_code: seq.import(path.join(__dirname, './user_share_qr_code')),
    vip_record: seq.import(path.join(__dirname, './vip_record')),
    weixin_binding: seq.import(path.join(__dirname, './weixin_binding')),
    weixin_scene_record: seq.import(path.join(__dirname, './weixin_scene_record')),
    weixin_scene_scan_log: seq.import(path.join(__dirname, './weixin_scene_scan_log')),
    weixin_user_temp: seq.import(path.join(__dirname, './weixin_user_temp')),
  };
  return tables;
};
