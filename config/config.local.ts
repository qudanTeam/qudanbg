import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.sequelize = {
    dialect: 'mysql',
    host: '47.99.242.122',
    port: 3306,
    username: 'root',
    password: 'mdlqd785',
    database: 'qudan_test',
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
