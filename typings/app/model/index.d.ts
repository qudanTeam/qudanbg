// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/model/admin';
import ExportAdminMenuPermission from '../../../app/model/admin_menu_permission';
import ExportAgent from '../../../app/model/agent';
import ExportAgentConfig from '../../../app/model/agent_config';
import ExportAgentView from '../../../app/model/agent_view';
import ExportAgentsView from '../../../app/model/agents_view';
import ExportApply from '../../../app/model/apply';
import ExportBanner from '../../../app/model/banner';
import ExportCategory from '../../../app/model/category';
import ExportCustomer from '../../../app/model/customer';
import ExportCustomerPdcView from '../../../app/model/customer_pdc_view';
import ExportMessage from '../../../app/model/message';
import ExportMessageStore from '../../../app/model/message_store';
import ExportOrderView from '../../../app/model/order_view';
import ExportPosApplyExt from '../../../app/model/pos_apply_ext';
import ExportProduct from '../../../app/model/product';
import ExportProductCategoryRelation from '../../../app/model/product_category_relation';
import ExportProductConfig from '../../../app/model/product_config';
import ExportProductLinks from '../../../app/model/product_links';
import ExportShareManager from '../../../app/model/share_manager';
import ExportTradeType from '../../../app/model/trade_type';
import ExportUser from '../../../app/model/user';
import ExportUserAccount from '../../../app/model/user_account';
import ExportUserShare from '../../../app/model/user_share';
import ExportVipConfig from '../../../app/model/vip_config';
import ExportVipRecord from '../../../app/model/vip_record';
import ExportVipRecordEnabledView from '../../../app/model/vip_record_enabled_view';
import ExportWeixinBinding from '../../../app/model/weixin_binding';
import ExportWeixinSceneRecord from '../../../app/model/weixin_scene_record';

declare module 'sequelize' {
  interface Sequelize {
    Admin: ReturnType<typeof ExportAdmin>;
    AdminMenuPermission: ReturnType<typeof ExportAdminMenuPermission>;
    Agent: ReturnType<typeof ExportAgent>;
    AgentConfig: ReturnType<typeof ExportAgentConfig>;
    AgentView: ReturnType<typeof ExportAgentView>;
    AgentsView: ReturnType<typeof ExportAgentsView>;
    Apply: ReturnType<typeof ExportApply>;
    Banner: ReturnType<typeof ExportBanner>;
    Category: ReturnType<typeof ExportCategory>;
    Customer: ReturnType<typeof ExportCustomer>;
    CustomerPdcView: ReturnType<typeof ExportCustomerPdcView>;
    Message: ReturnType<typeof ExportMessage>;
    MessageStore: ReturnType<typeof ExportMessageStore>;
    OrderView: ReturnType<typeof ExportOrderView>;
    PosApplyExt: ReturnType<typeof ExportPosApplyExt>;
    Product: ReturnType<typeof ExportProduct>;
    ProductCategoryRelation: ReturnType<typeof ExportProductCategoryRelation>;
    ProductConfig: ReturnType<typeof ExportProductConfig>;
    ProductLinks: ReturnType<typeof ExportProductLinks>;
    ShareManager: ReturnType<typeof ExportShareManager>;
    TradeType: ReturnType<typeof ExportTradeType>;
    User: ReturnType<typeof ExportUser>;
    UserAccount: ReturnType<typeof ExportUserAccount>;
    UserShare: ReturnType<typeof ExportUserShare>;
    VipConfig: ReturnType<typeof ExportVipConfig>;
    VipRecord: ReturnType<typeof ExportVipRecord>;
    VipRecordEnabledView: ReturnType<typeof ExportVipRecordEnabledView>;
    WeixinBinding: ReturnType<typeof ExportWeixinBinding>;
    WeixinSceneRecord: ReturnType<typeof ExportWeixinSceneRecord>;
  }
}
