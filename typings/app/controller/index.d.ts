// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportAgent from '../../../app/controller/agent';
import ExportAgentConfig from '../../../app/controller/agentConfig';
import ExportApply from '../../../app/controller/apply';
import ExportAuth from '../../../app/controller/auth';
import ExportBanner from '../../../app/controller/banner';
import ExportCategory from '../../../app/controller/category';
import ExportCustomer from '../../../app/controller/customer';
import ExportFile from '../../../app/controller/file';
import ExportHome from '../../../app/controller/home';
import ExportMessage from '../../../app/controller/message';
import ExportOrder from '../../../app/controller/order';
import ExportProduct from '../../../app/controller/product';
import ExportProductConfig from '../../../app/controller/product_config';
import ExportShareManager from '../../../app/controller/share_manager';
import ExportUser from '../../../app/controller/user';
import ExportVipConfigs from '../../../app/controller/vipConfigs';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    agent: ExportAgent;
    agentConfig: ExportAgentConfig;
    apply: ExportApply;
    auth: ExportAuth;
    banner: ExportBanner;
    category: ExportCategory;
    customer: ExportCustomer;
    file: ExportFile;
    home: ExportHome;
    message: ExportMessage;
    order: ExportOrder;
    product: ExportProduct;
    productConfig: ExportProductConfig;
    shareManager: ExportShareManager;
    user: ExportUser;
    vipConfigs: ExportVipConfigs;
  }
}
