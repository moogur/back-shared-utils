"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenderEnum = exports.ProcessEnvironmentKeys = exports.UserEnum = exports.WorkModeEnum = exports.SortingEnum = exports.UserStatusEnum = void 0;
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["Active"] = "ACTIVE";
    UserStatusEnum["Deleted"] = "DELETED";
    UserStatusEnum["NotDefined"] = "NOT_DEFINED";
})(UserStatusEnum = exports.UserStatusEnum || (exports.UserStatusEnum = {}));
var SortingEnum;
(function (SortingEnum) {
    SortingEnum["Asc"] = "ASC";
    SortingEnum["Desc"] = "DESC";
})(SortingEnum = exports.SortingEnum || (exports.SortingEnum = {}));
var WorkModeEnum;
(function (WorkModeEnum) {
    WorkModeEnum["Test"] = "TEST";
    WorkModeEnum["Production"] = "PRODUCTION";
    WorkModeEnum["Development"] = "DEVELOPMENT";
})(WorkModeEnum = exports.WorkModeEnum || (exports.WorkModeEnum = {}));
var UserEnum;
(function (UserEnum) {
    UserEnum["User"] = "USER";
    UserEnum["Admin"] = "ADMIN";
})(UserEnum = exports.UserEnum || (exports.UserEnum = {}));
var ProcessEnvironmentKeys;
(function (ProcessEnvironmentKeys) {
    ProcessEnvironmentKeys["Port"] = "PORT";
    ProcessEnvironmentKeys["DatabaseHost"] = "DB_HOST";
    ProcessEnvironmentKeys["DatabasePort"] = "DB_PORT";
    ProcessEnvironmentKeys["DatabaseUser"] = "DB_USER";
    ProcessEnvironmentKeys["DatabasePassword"] = "DB_PASSWORD";
    ProcessEnvironmentKeys["DatabaseBase"] = "DB_BASE";
    ProcessEnvironmentKeys["Mode"] = "MODE";
    ProcessEnvironmentKeys["RedisSocketPath"] = "REDIS_SOCKET_PATH";
    ProcessEnvironmentKeys["RedisUrl"] = "REDIS_URL";
    ProcessEnvironmentKeys["RedisPassword"] = "REDIS_PASSWORD";
    ProcessEnvironmentKeys["AdminUser"] = "ADMIN_USER";
    ProcessEnvironmentKeys["AdminPassword"] = "ADMIN_DEFAULT_PASSWORD";
    ProcessEnvironmentKeys["AdminSecret"] = "ADMIN_SECRET";
    ProcessEnvironmentKeys["UserSecret"] = "USER_SECRET";
    ProcessEnvironmentKeys["ServiceToken"] = "SERVICE_TOKEN";
    ProcessEnvironmentKeys["AppVersion"] = "APP_VERSION";
})(ProcessEnvironmentKeys = exports.ProcessEnvironmentKeys || (exports.ProcessEnvironmentKeys = {}));
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["Male"] = "MALE";
    GenderEnum["Female"] = "FEMALE";
})(GenderEnum = exports.GenderEnum || (exports.GenderEnum = {}));
//# sourceMappingURL=enum.js.map