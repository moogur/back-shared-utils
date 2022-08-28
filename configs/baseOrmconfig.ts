export const baseOrmconfig = {
  type: 'postgres',
  useUTC: true,
  synchronize: false,
  migrationsRun: true,
} as const;
