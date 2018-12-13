// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/service/Admin';
import ExportAgent from '../../../app/service/Agent';
import ExportAgentConfig from '../../../app/service/AgentConfig';
import ExportAuth from '../../../app/service/Auth';
import ExportBanner from '../../../app/service/Banner';
import ExportCustomer from '../../../app/service/Customer';
import ExportFile from '../../../app/service/File';
import ExportShareManager from '../../../app/service/ShareManager';
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/User';
import ExportVipConfig from '../../../app/service/VipConfig';

declare module 'egg' {
  interface IService {
    admin: ExportAdmin;
    agent: ExportAgent;
    agentConfig: ExportAgentConfig;
    auth: ExportAuth;
    banner: ExportBanner;
    customer: ExportCustomer;
    file: ExportFile;
    shareManager: ExportShareManager;
    test: ExportTest;
    user: ExportUser;
    vipConfig: ExportVipConfig;
  }
}
