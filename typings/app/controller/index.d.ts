// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportAgent from '../../../app/controller/agent';
import ExportAgentConfig from '../../../app/controller/agentConfig';
import ExportAuth from '../../../app/controller/auth';
import ExportBanner from '../../../app/controller/banner';
import ExportCustomer from '../../../app/controller/customer';
import ExportFile from '../../../app/controller/file';
import ExportHome from '../../../app/controller/home';
import ExportShareManager from '../../../app/controller/share_manager';
import ExportUser from '../../../app/controller/user';
import ExportVipConfigs from '../../../app/controller/vipConfigs';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    agent: ExportAgent;
    agentConfig: ExportAgentConfig;
    auth: ExportAuth;
    banner: ExportBanner;
    customer: ExportCustomer;
    file: ExportFile;
    home: ExportHome;
    shareManager: ExportShareManager;
    user: ExportUser;
    vipConfigs: ExportVipConfigs;
  }
}
