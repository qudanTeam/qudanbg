// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/model/admin';
import ExportAdminMenuPermission from '../../../app/model/admin_menu_permission';
import ExportAgent from '../../../app/model/agent';
import ExportAgentConfig from '../../../app/model/agent_config';
import ExportAgentView from '../../../app/model/agent_view';
import ExportAgentsView from '../../../app/model/agents_view';
import ExportBanner from '../../../app/model/banner';
import ExportCustomer from '../../../app/model/customer';
import ExportMessage from '../../../app/model/message';
import ExportMessageStore from '../../../app/model/message_store';
import ExportProduct from '../../../app/model/product';
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
    Banner: ReturnType<typeof ExportBanner>;
    Customer: ReturnType<typeof ExportCustomer>;
    Message: ReturnType<typeof ExportMessage>;
    MessageStore: ReturnType<typeof ExportMessageStore>;
    Product: ReturnType<typeof ExportProduct>;
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
