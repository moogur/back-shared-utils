export enum UserStatusEnum {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  NotDefined = 'NOT_DEFINED',
}

export enum SortingEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum WorkModeEnum {
  Test = 'TEST',
  Production = 'PRODUCTION',
  Development = 'DEVELOPMENT',
}

export enum ProcessEnvironmentKeys {
  PORT = 'PORT',
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_USER = 'DB_USER',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_BASE = 'DB_BASE',
  MODE = 'MODE',
  REDIS_SOCKET_PATH = 'REDIS_SOCKET_PATH',
  REDIS_URL = 'REDIS_URL',
  REDIS_PASSWORD = 'REDIS_PASSWORD',
  ADMIN_USER = 'ADMIN_USER',
  ADMIN_PASSWORD = 'ADMIN_PASSWORD',
}
