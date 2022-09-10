import { ProcessEnvironmentKeys } from '@types';

export const baseOrmconfig = {
  type: 'postgres',
  useUTC: true,
  synchronize: false,
  migrationsRun: true,
  host: process.env[ProcessEnvironmentKeys.DatabaseHost],
  port: Number(process.env[ProcessEnvironmentKeys.DatabasePort]),
  username: process.env[ProcessEnvironmentKeys.DatabaseUser],
  password: process.env[ProcessEnvironmentKeys.DatabasePassword],
  database: process.env[ProcessEnvironmentKeys.DatabaseBase],
} as const;
