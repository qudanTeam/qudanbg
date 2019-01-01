// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/service/Admin';
import ExportAgent from '../../../app/service/Agent';
import ExportAgentConfig from '../../../app/service/AgentConfig';
import ExportApply from '../../../app/service/Apply';
import ExportAuth from '../../../app/service/Auth';
import ExportBanner from '../../../app/service/Banner';
import ExportCategory from '../../../app/service/Category';
import ExportCustomer from '../../../app/service/Customer';
import ExportFile from '../../../app/service/File';
import ExportMessage from '../../../app/service/Message';
import ExportOrder from '../../../app/service/Order';
import ExportProduct from '../../../app/service/Product';
import ExportProductConfig from '../../../app/service/ProductConfig';
import ExportShareManager from '../../../app/service/ShareManager';
import ExportTest from '../../../app/service/Test';
import ExportTradeType from '../../../app/service/TradeType';
import ExportUser from '../../../app/service/User';
import ExportVipConfig from '../../../app/service/VipConfig';

declare module 'egg' {
  interface IService {
    admin: ExportAdmin;
    agent: ExportAgent;
    agentConfig: ExportAgentConfig;
    apply: ExportApply;
    auth: ExportAuth;
    banner: ExportBanner;
    category: ExportCategory;
    customer: ExportCustomer;
    file: ExportFile;
    message: ExportMessage;
    order: ExportOrder;
    product: ExportProduct;
    productConfig: ExportProductConfig;
    shareManager: ExportShareManager;
    test: ExportTest;
    tradeType: ExportTradeType;
    user: ExportUser;
    vipConfig: ExportVipConfig;
  }
}
