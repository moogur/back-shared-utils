import { DataSourceOptions } from 'typeorm';

export const baseOrmconfig: DataSourceOptions = {
  type: 'postgres',
  useUTC: true,
  synchronize: false,
  migrationsRun: true,
};
