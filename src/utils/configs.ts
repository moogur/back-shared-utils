import { ProcessEnvironmentKeys, WorkModeEnum } from '@types';

export function getCacheConfig() {
  const mode = process.env[ProcessEnvironmentKeys.Mode];

  const baseConfig: { type?: 'redis' | 'database' | 'ioredis' | 'ioredis/cluster'; duration: number } = {
    type: 'redis',
    duration: 60_000,
  };

  switch (true) {
    case !mode || mode === WorkModeEnum.Test:
      return false;
    case Boolean(process.env[ProcessEnvironmentKeys.RedisSocketPath]):
      return {
        ...baseConfig,
        options: {
          socket: {
            path: process.env[ProcessEnvironmentKeys.RedisSocketPath],
          },
        },
      };
    case Boolean(process.env[ProcessEnvironmentKeys.RedisUrl] && process.env[ProcessEnvironmentKeys.RedisPassword]):
      return {
        ...baseConfig,
        options: {
          url: process.env[ProcessEnvironmentKeys.RedisUrl],
          password: process.env[ProcessEnvironmentKeys.RedisPassword],
        },
      };
    default:
      return false;
  }
}
