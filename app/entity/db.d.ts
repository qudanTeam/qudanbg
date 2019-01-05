// tslint:disable
import * as Sequelize from 'sequelize';


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

// table: agents_view
export interface agents_viewAttribute {
  id?:number;
  user_id?:number;
  level?:number;
  beign_agent_time?:Date;
  create_time?:Date;
  modify_time?:Date;
  parent_agent_id:number;
  parent_user_id?:number;
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
}
export interface applyInstance extends Sequelize.Instance<applyAttribute>, applyAttribute { }
export interface applyModel extends Sequelize.Model<applyInstance, applyAttribute> { }

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
  invite_code?:string;
  apply_id_code?:string;
  username?:string;
  realname?:string;
  product_type?:number;
  product_name?:string;
  finished_task_count?:number;
  finished_task_price?:number;
}
export interface order_viewInstance extends Sequelize.Instance<order_viewAttribute>, order_viewAttribute { }
export interface order_viewModel extends Sequelize.Model<order_viewInstance, order_viewAttribute> { }

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
  how_settle:string;
  expire_begin?:number;
  expire_end?:number;
  commission_standard?:string;
  share_title?:string;
  card_progress_img?:string;
  base_right?:string;
  preferential?:string;
  special_tag?:string;
  special_txt:string;
  unit?:string;
  jl_unite?:string;
  product_profit_price?:number;
  product_link?:string;
  product_poster?:string;
  loan_limit?:number;
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
  product_id?:number;
  title?:string;
  content?:string;
  create_time?:Date;
  modify_time?:Date;
  id:number;
}
export interface product_configInstance extends Sequelize.Instance<product_configAttribute>, product_configAttribute { }
export interface product_configModel extends Sequelize.Model<product_configInstance, product_configAttribute> { }

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

// table: salary
export interface salaryAttribute {
  id:string;
  PROC_INS_ID?:string;
  USER_ID?:string;
  OFFICE_ID?:string;
  POST?:string;
  AGE?:string;
  EDU?:string;
  CONTENT?:string;
  OLDA?:string;
  OLDB?:string;
  OLDC?:string;
  NEWA?:string;
  NEWB?:string;
  NEWC?:string;
  ADD_NUM?:string;
  EXE_DATE?:string;
  HR_TEXT?:string;
  LEAD_TEXT?:string;
  MAIN_LEAD_TEXT?:string;
  create_by:string;
  create_date:Date;
  update_by:string;
  update_date:Date;
  remarks?:string;
  del_flag:string;
}
export interface salaryInstance extends Sequelize.Instance<salaryAttribute>, salaryAttribute { }
export interface salaryModel extends Sequelize.Model<salaryInstance, salaryAttribute> { }

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

// table: sys_log
export interface sys_logAttribute {
  id:number;
  user_id?:number;
  username?:string;
  operation?:string;
  time?:number;
  method?:string;
  params?:string;
  ip?:string;
  gmt_create?:Date;
}
export interface sys_logInstance extends Sequelize.Instance<sys_logAttribute>, sys_logAttribute { }
export interface sys_logModel extends Sequelize.Model<sys_logInstance, sys_logAttribute> { }

// table: sys_menu
export interface sys_menuAttribute {
  menu_id:number;
  parent_id?:number;
  name?:string;
  url?:string;
  perms?:string;
  type?:number;
  icon?:string;
  order_num?:number;
  gmt_create?:Date;
  gmt_modified?:Date;
}
export interface sys_menuInstance extends Sequelize.Instance<sys_menuAttribute>, sys_menuAttribute { }
export interface sys_menuModel extends Sequelize.Model<sys_menuInstance, sys_menuAttribute> { }

// table: sys_role
export interface sys_roleAttribute {
  role_id:number;
  role_name?:string;
  role_sign?:string;
  remark?:string;
  user_id_create?:number;
  gmt_create?:Date;
  gmt_modified?:Date;
}
export interface sys_roleInstance extends Sequelize.Instance<sys_roleAttribute>, sys_roleAttribute { }
export interface sys_roleModel extends Sequelize.Model<sys_roleInstance, sys_roleAttribute> { }

// table: sys_user_role
export interface sys_user_roleAttribute {
  id:number;
  user_id?:number;
  role_id?:number;
}
export interface sys_user_roleInstance extends Sequelize.Instance<sys_user_roleAttribute>, sys_user_roleAttribute { }
export interface sys_user_roleModel extends Sequelize.Model<sys_user_roleInstance, sys_user_roleAttribute> { }

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
}
export interface trade_typeInstance extends Sequelize.Instance<trade_typeAttribute>, trade_typeAttribute { }
export interface trade_typeModel extends Sequelize.Model<trade_typeInstance, trade_typeAttribute> { }

// table: sys_role_menu
export interface sys_role_menuAttribute {
  id:number;
  role_id?:number;
  menu_id?:number;
}
export interface sys_role_menuInstance extends Sequelize.Instance<sys_role_menuAttribute>, sys_role_menuAttribute { }
export interface sys_role_menuModel extends Sequelize.Model<sys_role_menuInstance, sys_role_menuAttribute> { }

// table: sys_task
export interface sys_taskAttribute {
  id:number;
  cron_expression?:string;
  method_name?:string;
  is_concurrent?:string;
  description?:string;
  update_by?:string;
  bean_class?:string;
  create_date?:Date;
  job_status?:string;
  job_group?:string;
  update_date?:Date;
  create_by?:string;
  spring_bean?:string;
  job_name?:string;
}
export interface sys_taskInstance extends Sequelize.Instance<sys_taskAttribute>, sys_taskAttribute { }
export interface sys_taskModel extends Sequelize.Model<sys_taskInstance, sys_taskAttribute> { }

// table: sys_user
export interface sys_userAttribute {
  user_id:number;
  username?:string;
  name?:string;
  password?:string;
  dept_id?:number;
  email?:string;
  mobile?:string;
  status?:number;
  user_id_create?:number;
  gmt_create?:Date;
  gmt_modified?:Date;
  sex?:number;
  birth?:Date;
  pic_id?:number;
  live_address?:string;
  hobby?:string;
  province?:string;
  city?:string;
  district?:string;
}
export interface sys_userInstance extends Sequelize.Instance<sys_userAttribute>, sys_userAttribute { }
export interface sys_userModel extends Sequelize.Model<sys_userInstance, sys_userAttribute> { }

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
