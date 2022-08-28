interface GetCacheConfig {
  mode: string;
  socketPath?: string;
  url?: string;
  password?: string;
}

export function getCacheConfig({ mode, socketPath, password, url }: GetCacheConfig) {
  const baseConfig: { type?: 'redis' | 'database' | 'ioredis' | 'ioredis/cluster'; duration: number } = {
    type: 'redis',
    duration: 60_000,
  };

  switch (true) {
    case mode !== 'test':
      return false;
    case Boolean(socketPath):
      return {
        ...baseConfig,
        options: {
          'socket.path': socketPath,
        },
      };
    case Boolean(url && password):
      return {
        ...baseConfig,
        options: {
          url: url,
          password: password,
        },
      };
    default:
      return false;
  }
}