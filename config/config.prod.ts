import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.sequelize = {
    dialect: 'mysql',
    host: 'rm-bp15h0ta135y2vmde.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'qudan',
    password: 'Qd20195000',
    database: 'qudan',
    define: {
      underscored: false,
      charset: 'utf8mb4',
      timestamps: false,
    },
  };
  
  return config;
};
