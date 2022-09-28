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

export enum UserEnum {
  User = 'USER',
  Admin = 'ADMIN',
}

export enum ProcessEnvironmentKeys {
  Port = 'PORT',
  DatabaseHost = 'DB_HOST',
  DatabasePort = 'DB_PORT',
  DatabaseUser = 'DB_USER',
  DatabasePassword = 'DB_PASSWORD',
  DatabaseBase = 'DB_BASE',
  Mode = 'MODE',
  RedisSocketPath = 'REDIS_SOCKET_PATH',
  RedisUrl = 'REDIS_URL',
  RedisPassword = 'REDIS_PASSWORD',
  AdminUser = 'ADMIN_USER',
  AdminPassword = 'ADMIN_DEFAULT_PASSWORD',
  AdminSecret = 'ADMIN_SECRET',
  UserSecret = 'USER_SECRET',
  ServiceToken = 'SERVICE_TOKEN',
  ServiceTokenFilePath = 'SERVICE_TOKEN_FILE_PATH',
  AppVersion = 'APP_VERSION',
}

export enum GenderEnum {
  Male = 'MALE',
  Female = 'FEMALE',
}
