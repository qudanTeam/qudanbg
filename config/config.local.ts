import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.sequelize = {
    dialect: 'mysql',
    // host: '47.99.242.122',
    host: 'rm-bp15h0ta135y2vmdeyo.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'qudan',
    // password: 'mdlqd785',
    password: 'Qd20195000',
    database: 'qudansh',
    define: {
      underscored: false,
      charset: 'utf8mb4',
      timestamps: false,
    },
  };
  
  const bizConfig = {
    schedule: {
      month: '3600s',
    },
    javaAPI: 'http://txmsqudan.myhshop.top/msqudan/api',
  }
  return {
    ...config,
    ...bizConfig,
  };
};
