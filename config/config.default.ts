import { EggAppConfig, EggAppInfo, PowerPartial, Context } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1544533807654_2864';

  // add your egg config in here
  config.middleware = [
    'auth',
  ];

  config.onerror = {
    all(err, ctx: Context) {
      // console.log('err 错误', err);
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      ctx.body = JSON.stringify({ message: err.message || 'Internal Server Error' });
      ctx.response.set('Content-Type', 'application/json');
      // ctx.body = 'hello'
      return
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: 'rm-bp15h0ta135y2vmde.mysql.rds.aliyuncs.com',
    port: 3306,
    username: 'qudan',
    password: 'Qd20195000',
    database: 'qudansh',
    define: {
      underscored: false,
      charset: 'utf8mb4',
      timestamps: false,
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,

    jwt: {
      salt: 'uiujwnerhh&^&asdfwqerqwer',
    },

    whiteList: [
      '/login',
      '/upload',
      '/export/orders',
      '/export/users',
    ],

    qiniu: {
      key: '3zwCbYQEVLBBAyWpww2I_mtvL3HDNzx1ro6RVydz',
      secret: 'FCgzF5i6nxisRZlEP96ry3CQTjgk26GyQlt25EiK',
      bulket: 'qudan-idc',
    },

    javaAPI: 'http://47.110.134.189:8763/msqudan/api',
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
