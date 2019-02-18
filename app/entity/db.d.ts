// tslint:disable
import * as Sequelize from 'sequelize';


// table: admin
export interface adminAttribute {
  id:number;
  username?:string;
  password?:string;
  enabled?:number;
  create_at?:Date;
  update_at?:Date;
}
export interface adminInstance extends Sequelize.Instance<adminAttribute>, adminAttribute { }
export interface adminModel extends Sequelize.Model<adminInstance, adminAttribute> { }

// table: admin_menu_permission
export interface admin_menu_permissionAttribute {
  id:number;
  admin_id?:number;
  permission_id?:number;
}
export interface admin_menu_permissionInstance extends Sequelize.Instance<admin_menu_permissionAttribute>, admin_menu_permissionAttribute { }
export interface admin_menu_permissionModel extends Sequelize.Model<admin_menu_permissionInstance, admin_menu_permissionAttribute> { }

// table: agent_config
export interface agent_configAttribute {
  id:number;
  level?:number;
  direct_rate?:number;
  related_rate?:number;
  invite_limit?:number;
  task_done_limit?:number;
  share_limit?:number;
  create_time?:Date;
  modify_time?:Date;
}
export interface agent_configInstance extends Sequelize.Instance<agent_configAttribute>, agent_configAttribute { }
export interface agent_configModel extends Sequelize.Model<agent_configInstance, agent_configAttribute> { }

// table: agent_relation
export interface agent_relationAttribute {
  id:number;
  agent_id?:number;
  user_id?:number;
  create_time?:Date;
  modify_time?:Date;
}
export interface agent_relationInstance extends Sequelize.Instance<agent_relationAttribute>, agent_relationAttribute { }
export interface agent_relationModel extends Sequelize.Model<agent_relationInstance, agent_relationAttribute> { }

// table: agent
export interface agentAttribute {
  id:number;
  user_id?:number;
  level?:number;
  beign_agent_time?:Date;
  create_time?:Date;
  modify_time?:Date;
}
export interface agentInstance extends Sequelize.Instance<agentAttribute>, agentAttribute { }
export interface agentModel extends Sequelize.Model<agentInstance, agentAttribute> { }

// table: agents_view
export interface agents_viewAttribute {
  id:number;
  agent_id?:number;
  beign_agent_time?:Date;
  create_time?:Date;
  level?:number;
  modify_time?:Date;
  user_id:number;
  parent_user_id?:number;
  parent_agent_id?:number;
}
export interface agents_viewInstance extends Sequelize.Instance<agents_viewAttribute>, agents_viewAttribute { }
export interface agents_viewModel extends Sequelize.Model<agents_viewInstance, agents_viewAttribute> { }

// table: apply
export interface applyAttribute {
  id:number;
  user_id?:number;
  product_id?:number;
  create_time?:Date;
  modify_time?:Date;
  mobile?:string;
  name?:string;
  id_no?:string;
  status?:number;
  official_status?:number;
  last_official_query?:Date;
  reject_reason?:string;
  salary_status?:number;
  invite_code?:string;
  apply_id_code?:string;
  official_limit?:number;
  official_expire?:string;
  official_time?:Date;
  loan_money?:any;
  loan_expire?:string;
  card_money?:string;
  is_settle?:number;
}
export interface applyInstance extends Sequelize.Instance<applyAttribute>, applyAttribute { }
export interface applyModel extends Sequelize.Model<applyInstance, applyAttribute> { }

// table: agent_view
export interface agent_viewAttribute {
  id:number;
  user_id?:number;
  level?:number;
  beign_agent_time?:Date;
  create_time?:Date;
  modify_time?:Date;
  invite_code?:string;
  direct_rate?:number;
  related_rate?:number;
}
export interface agent_viewInstance extends Sequelize.Instance<agent_viewAttribute>, agent_viewAttribute { }
export interface agent_viewModel extends Sequelize.Model<agent_viewInstance, agent_viewAttribute> { }

// table: bank_query
export interface bank_queryAttribute {
  id:number;
  card_cat?:string;
  bank_id?:number;
  name?:string;
  jinjian_date?:string;
  card_status?:string;
  status?:number;
  bank_name?:string;
}
export interface bank_queryInstance extends Sequelize.Instance<bank_queryAttribute>, bank_queryAttribute { }
export interface bank_queryModel extends Sequelize.Model<bank_queryInstance, bank_queryAttribute> { }

// table: banner
export interface bannerAttribute {
  id:number;
  title?:string;
  link?:string;
  img?:string;
  sort_val?:number;
  is_show?:number;
  create_time?:Date;
  modify_tiime?:Date;
  position?:number;
}
export interface bannerInstance extends Sequelize.Instance<bannerAttribute>, bannerAttribute { }
export interface bannerModel extends Sequelize.Model<bannerInstance, bannerAttribute> { }

// table: category
export interface categoryAttribute {
  id:number;
  name?:string;
  create_time?:Date;
  modify_time?:Date;
  category_type?:number;
  logo?:string;
  get_link?:string;
  need_verify_code?:number;
  need_mobile_verify_code?:number;
  verify_code_link?:string;
  mobile_verify_code_link?:string;
  is_delete?:number;
  has_link?:number;
}
export interface categoryInstance extends Sequelize.Instance<categoryAttribute>, categoryAttribute { }
export interface categoryModel extends Sequelize.Model<categoryInstance, categoryAttribute> { }

// table: customer
export interface customerAttribute {
  id:number;
  name?:string;
  create_time?:Date;
  modify_time?:Date;
  mobile?:string;
  weixin?:string;
}
export interface customerInstance extends Sequelize.Instance<customerAttribute>, customerAttribute { }
export interface customerModel extends Sequelize.Model<customerInstance, customerAttribute> { }

// table: customer_pdc_view
export interface customer_pdc_viewAttribute {
  id:number;
  name?:string;
  create_time?:Date;
  modify_time?:Date;
  mobile?:string;
  weixin?:string;
  product_count?:number;
}
export interface customer_pdc_viewInstance extends Sequelize.Instance<customer_pdc_viewAttribute>, customer_pdc_viewAttribute { }
export interface customer_pdc_viewModel extends Sequelize.Model<customer_pdc_viewInstance, customer_pdc_viewAttribute> { }

// table: menu_permission
export interface menu_permissionAttribute {
  id:number;
  permission_name?:string;
  permission_key?:string;
}
export interface menu_permissionInstance extends Sequelize.Instance<menu_permissionAttribute>, menu_permissionAttribute { }
export interface menu_permissionModel extends Sequelize.Model<menu_permissionInstance, menu_permissionAttribute> { }

// table: message
export interface messageAttribute {
  id:number;
  msg_logo?:string;
  msg_title?:string;
  msg_content?:string;
  msg_link?:string;
  create_time?:Date;
  user_id?:number;
  is_user_delete?:number;
  modify_time?:Date;
}
export interface messageInstance extends Sequelize.Instance<messageAttribute>, messageAttribute { }
export interface messageModel extends Sequelize.Model<messageInstance, messageAttribute> { }

// table: message_store
export interface message_storeAttribute {
  id:number;
  msg_logo?:string;
  msg_title?:string;
  msg_content?:string;
  msg_link?:string;
  create_at?:Date;
  update_at?:Date;
  user_ids?:string;
}
export interface message_storeInstance extends Sequelize.Instance<message_storeAttribute>, message_storeAttribute { }
export interface message_storeModel extends Sequelize.Model<message_storeInstance, message_storeAttribute> { }

// table: pay_order
export interface pay_orderAttribute {
  sid:number;
  order_id?:string;
  trade_type?:string;
  order_status?:string;
  type?:string;
  user_id?:string;
  total_fee?:string;
  prepay_id?:string;
  trade_time?:Date;
}
export interface pay_orderInstance extends Sequelize.Instance<pay_orderAttribute>, pay_orderAttribute { }
export interface pay_orderModel extends Sequelize.Model<pay_orderInstance, pay_orderAttribute> { }

// table: pos_apply_ext
export interface pos_apply_extAttribute {
  id:number;
  express_name?:string;
  express_no?:string;
  create_time?:Date;
  apply_id?:number;
  user_id?:number;
  apply_mobile?:string;
  product_id?:number;
  pay_type?:number;
  pay_price?:number;
  pay_deposit?:number;
  address?:string;
  region?:string;
  receiver?:string;
  receiver_mobile?:string;
  modify_time?:Date;
  deposit_status?:number;
  apply_name?:string;
  invite_code?:string;
  deliver_status?:number;
  pay_order_no?:string;
  pos_no?:string;
}
export interface pos_apply_extInstance extends Sequelize.Instance<pos_apply_extAttribute>, pos_apply_extAttribute { }
export interface pos_apply_extModel extends Sequelize.Model<pos_apply_extInstance, pos_apply_extAttribute> { }

// table: order_view
export interface order_viewAttribute {
  id:number;
  user_id?:number;
  product_id?:number;
  create_time?:Date;
  modify_time?:Date;
  mobile?:string;
  name?:string;
  id_no?:string;
  status?:number;
  official_status?:number;
  last_official_query?:Date;
  reject_reason?:string;
  salary_status?:number;
  loan_money?:any;
  loan_expire?:string;
  card_money?:string;
  user_invite_code?:string;
  invite_code?:string;
  apply_id_code?:string;
  username?:string;
  realname?:string;
  register_mobile?:string;
  product_type?:number;
  product_name?:string;
  syr_realname?:string;
  syr_id_no?:string;
  syr_register_mobile?:string;
  finished_task_count?:number;
  finished_task_price?:number;
  deposit_status?:number;
  deliver_status?:number;
  pae_id?:number;
  pos_apply_invite_code?:string;
  pay_order_no?:string;
  pay_price?:string;
  pay_time?:Date;
}
export interface order_viewInstance extends Sequelize.Instance<order_viewAttribute>, order_viewAttribute { }
export interface order_viewModel extends Sequelize.Model<order_viewInstance, order_viewAttribute> { }

// table: product
export interface productAttribute {
  id:number;
  product_name?:string;
  logo?:string;
  product_type?:number;
  is_hot?:number;
  is_show?:number;
  customer?:number;
  is_in_shop?:number;
  is_shelf?:number;
  create_time?:Date;
  modify_time?:Date;
  commission?:number;
  sort_val?:number;
  bg_category?:string;
  amount_line?:number;
  progress_query_img?:string;
  allow_rate:number;
  apply_num?:number;
  apply_condition?:string;
  apply_tp_img?:string;
  day_rate:number;
  month_rate?:number;
  a_begin?:number;
  a_limit?:number;
  b_begin?:number;
  b_limit?:number;
  c_start?:number;
  c_limit?:number;
  a_level_reward?:number;
  b_level_reward?:number;
  c_level_reward?:number;
  base_salary?:number;
  month_salary?:string;
  salary?:string;
  salary_desc:string;
  month_salary_desc?:string;
  second_summary?:string;
  third_summary?:string;
  detail_header_img?:string;
  card_long_img?:string;
  product_show_img?:string;
  burundian?:string;
  settlement_type?:number;
  expire_unit?:string;
  how_settle?:string;
  expire_begin?:number;
  expire_end?:number;
  commission_standard?:string;
  share_title?:string;
  card_progress_img?:string;
  base_right?:string;
  handing_process?:string;
  preferential?:string;
  special_tag?:string;
  special_txt:string;
  unit?:string;
  jl_unite?:string;
  product_profit_price?:number;
  product_link?:string;
  card_kind?:number;
  product_poster?:string;
  loan_limit?:number;
  share_logo?:string;
  share_content?:string;
  platform_award?:number;
  pos_price?:number;
  pos_deposit?:number;
  benefits_b?:string;
  benefits_c?:string;
  require_condition?:string;
  update_admin?:string;
}
export interface productInstance extends Sequelize.Instance<productAttribute>, productAttribute { }
export interface productModel extends Sequelize.Model<productInstance, productAttribute> { }

// table: product_category_relation
export interface product_category_relationAttribute {
  id:number;
  product_id?:number;
  category_id?:number;
  create_time?:Date;
  modify_time?:Date;
}
export interface product_category_relationInstance extends Sequelize.Instance<product_category_relationAttribute>, product_category_relationAttribute { }
export interface product_category_relationModel extends Sequelize.Model<product_category_relationInstance, product_category_relationAttribute> { }

// table: product_config
export interface product_configAttribute {
  id:number;
  product_id?:number;
  title?:string;
  content?:string;
  create_time?:Date;
  modify_time?:Date;
}
export interface product_configInstance extends Sequelize.Instance<product_configAttribute>, product_configAttribute { }
export interface product_configModel extends Sequelize.Model<product_configInstance, product_configAttribute> { }

// table: share_manager
export interface share_managerAttribute {
  id:number;
  product_id?:number;
  content?:string;
  is_show?:number;
  share_img?:string;
  modify_tiime?:Date;
  create_time?:Date;
  sort_val?:number;
}
export interface share_managerInstance extends Sequelize.Instance<share_managerAttribute>, share_managerAttribute { }
export interface share_managerModel extends Sequelize.Model<share_managerInstance, share_managerAttribute> { }

// table: product_links
export interface product_linksAttribute {
  id:number;
  product_name?:string;
  link?:string;
  category_name?:string;
  product_type?:number;
}
export interface product_linksInstance extends Sequelize.Instance<product_linksAttribute>, product_linksAttribute { }
export interface product_linksModel extends Sequelize.Model<product_linksInstance, product_linksAttribute> { }

// table: sms_send_record
export interface sms_send_recordAttribute {
  id:number;
  code?:string;
  send_type?:number;
  mobile?:string;
  create_time?:Date;
  invalid_time?:Date;
  is_valid?:number;
}
export interface sms_send_recordInstance extends Sequelize.Instance<sms_send_recordAttribute>, sms_send_recordAttribute { }
export interface sms_send_recordModel extends Sequelize.Model<sms_send_recordInstance, sms_send_recordAttribute> { }

// table: user
export interface userAttribute {
  id:number;
  username?:string;
  password?:string;
  userface?:string;
  isenable?:number;
  register_mobile?:string;
  id_no?:string;
  alipay_no?:string;
  agent_level?:number;
  register_time?:Date;
  last_login_time?:Date;
  status?:number;
  user_type?:number;
  modify_time?:Date;
  agent_id?:number;
  recommend_invite_code?:string;
  invite_code?:string;
  recommend_invite_id?:number;
  vip_name?:string;
  realname?:string;
  vip_level?:number;
  finance_status?:number;
}
export interface userInstance extends Sequelize.Instance<userAttribute>, userAttribute { }
export interface userModel extends Sequelize.Model<userInstance, userAttribute> { }

// table: trade_type
export interface trade_typeAttribute {
  id:number;
  trade_type?:number;
  apply_id?:number;
  price?:number;
  create_time?:Date;
  modify_time?:Date;
  status?:number;
  account?:number;
  indirect_type?:number;
  send_status?:number;
  audit_time?:Date;
  send_time?:Date;
  vip_rate?:number;
  vip_level?:number;
  base_price?:number;
  relation_user_id?:number;
  user_id?:number;
  vip_price?:number;
  reject_reason?:string;
  tx_name?:string;
  tx_alipay_no?:string;
  agent_level?:number;
  agent_rate?:number;
  remark?:string;
  product_id?:number;
  platform_price?:number;
}
export interface trade_typeInstance extends Sequelize.Instance<trade_typeAttribute>, trade_typeAttribute { }
export interface trade_typeModel extends Sequelize.Model<trade_typeInstance, trade_typeAttribute> { }

// table: user_account
export interface user_accountAttribute {
  id:number;
  user_id?:number;
  blance?:number;
  allow_tx?:number;
  tx?:number;
  create_time?:Date;
  modify_time?:Date;
}
export interface user_accountInstance extends Sequelize.Instance<user_accountAttribute>, user_accountAttribute { }
export interface user_accountModel extends Sequelize.Model<user_accountInstance, user_accountAttribute> { }

// table: statistic_ladder
export interface statistic_ladderAttribute {
  recommend_invite_id?:number;
  product_id?:number;
  product_type?:number;
  base_salary?:number;
  a_limit?:number;
  b_limit?:number;
  c_limit?:number;
  a_begin?:number;
  b_begin?:number;
  c_start?:number;
  a_level_reward?:number;
  b_level_reward?:number;
  c_level_reward?:number;
  tmonth?:string;
  total:number;
  load_money?:number;
}
export interface statistic_ladderInstance extends Sequelize.Instance<statistic_ladderAttribute>, statistic_ladderAttribute { }
export interface statistic_ladderModel extends Sequelize.Model<statistic_ladderInstance, statistic_ladderAttribute> { }

// table: user_share
export interface user_shareAttribute {
  id:number;
  user_id?:number;
  weixin_scene_id?:number;
  share_time?:Date;
  qr_code_id?:number;
}
export interface user_shareInstance extends Sequelize.Instance<user_shareAttribute>, user_shareAttribute { }
export interface user_shareModel extends Sequelize.Model<user_shareInstance, user_shareAttribute> { }

// table: vip_record_enabled_view
export interface vip_record_enabled_viewAttribute {
  id:number;
  trade_id?:number;
  vip_config_id?:number;
  start_time?:Date;
  user_id?:number;
  end_time?:Date;
  trade_price?:number;
  add_rate?:number;
  vip_name?:string;
  total_vip_price:number;
}
export interface vip_record_enabled_viewInstance extends Sequelize.Instance<vip_record_enabled_viewAttribute>, vip_record_enabled_viewAttribute { }
export interface vip_record_enabled_viewModel extends Sequelize.Model<vip_record_enabled_viewInstance, vip_record_enabled_viewAttribute> { }

// table: vip_config
export interface vip_configAttribute {
  id:number;
  add_rate?:number;
  vip_price?:number;
  start_time?:Date;
  service_days?:number;
  over_time?:Date;
  vip_logo?:string;
  create_time?:Date;
  modify_time?:Date;
  isenable?:number;
  version?:number;
  vip_name?:string;
  vip_level?:number;
  promotion_price?:number;
}
export interface vip_configInstance extends Sequelize.Instance<vip_configAttribute>, vip_configAttribute { }
export interface vip_configModel extends Sequelize.Model<vip_configInstance, vip_configAttribute> { }

// table: user_share_qr_code
export interface user_share_qr_codeAttribute {
  id:number;
  share_type?:number;
  img_url?:string;
  pid?:number;
  create_time?:Date;
  user_id?:number;
  address_url?:string;
}
export interface user_share_qr_codeInstance extends Sequelize.Instance<user_share_qr_codeAttribute>, user_share_qr_codeAttribute { }
export interface user_share_qr_codeModel extends Sequelize.Model<user_share_qr_codeInstance, user_share_qr_codeAttribute> { }

// table: vip_record
export interface vip_recordAttribute {
  id:number;
  trade_id?:number;
  vip_config_id?:number;
  start_time?:Date;
  user_id?:number;
  end_time?:Date;
}
export interface vip_recordInstance extends Sequelize.Instance<vip_recordAttribute>, vip_recordAttribute { }
export interface vip_recordModel extends Sequelize.Model<vip_recordInstance, vip_recordAttribute> { }

// table: weixin_binding
export interface weixin_bindingAttribute {
  id:number;
  user_id?:number;
  openid?:string;
  unionid?:string;
  wechat_name?:string;
  wechat_logo?:string;
  create_time?:Date;
  modify_time?:Date;
}
export interface weixin_bindingInstance extends Sequelize.Instance<weixin_bindingAttribute>, weixin_bindingAttribute { }
export interface weixin_bindingModel extends Sequelize.Model<weixin_bindingInstance, weixin_bindingAttribute> { }

// table: weixin_scene_record
export interface weixin_scene_recordAttribute {
  id:number;
  type?:string;
  params?:string;
  create_time?:Date;
  expire_time?:Date;
  expire_seconds?:number;
  ticket?:string;
  scene_id?:number;
  qr_type?:number;
  apply_user_id?:number;
  qr_address?:string;
}
export interface weixin_scene_recordInstance extends Sequelize.Instance<weixin_scene_recordAttribute>, weixin_scene_recordAttribute { }
export interface weixin_scene_recordModel extends Sequelize.Model<weixin_scene_recordInstance, weixin_scene_recordAttribute> { }

// table: weixin_scene_scan_log
export interface weixin_scene_scan_logAttribute {
  id:number;
  user_id?:number;
  open_id?:string;
  create_time?:Date;
  scene_id?:number;
  qr_type?:number;
}
export interface weixin_scene_scan_logInstance extends Sequelize.Instance<weixin_scene_scan_logAttribute>, weixin_scene_scan_logAttribute { }
export interface weixin_scene_scan_logModel extends Sequelize.Model<weixin_scene_scan_logInstance, weixin_scene_scan_logAttribute> { }

// table: weixin_user_temp
export interface weixin_user_tempAttribute {
  id:number;
  openid?:string;
  unionid?:string;
  nickname?:string;
  head_img_url?:string;
  sex?:string;
  country?:string;
  province?:string;
  language?:string;
}
export interface weixin_user_tempInstance extends Sequelize.Instance<weixin_user_tempAttribute>, weixin_user_tempAttribute { }
export interface weixin_user_tempModel extends Sequelize.Model<weixin_user_tempInstance, weixin_user_tempAttribute> { }
