import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  
  const bizConfig = {
    schedule: {
      month: '3600s',
    }
  }
  return {
    ...config,
    ...bizConfig,
  };
};
