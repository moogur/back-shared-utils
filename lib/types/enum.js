"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessEnvironmentKeys = exports.UserEnum = exports.WorkModeEnum = exports.SortingEnum = exports.UserStatusEnum = void 0;
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
    ProcessEnvironmentKeys["PORT"] = "PORT";
    ProcessEnvironmentKeys["DB_HOST"] = "DB_HOST";
    ProcessEnvironmentKeys["DB_PORT"] = "DB_PORT";
    ProcessEnvironmentKeys["DB_USER"] = "DB_USER";
    ProcessEnvironmentKeys["DB_PASSWORD"] = "DB_PASSWORD";
    ProcessEnvironmentKeys["DB_BASE"] = "DB_BASE";
    ProcessEnvironmentKeys["MODE"] = "MODE";
    ProcessEnvironmentKeys["REDIS_SOCKET_PATH"] = "REDIS_SOCKET_PATH";
    ProcessEnvironmentKeys["REDIS_URL"] = "REDIS_URL";
    ProcessEnvironmentKeys["REDIS_PASSWORD"] = "REDIS_PASSWORD";
    ProcessEnvironmentKeys["ADMIN_USER"] = "ADMIN_USER";
    ProcessEnvironmentKeys["ADMIN_PASSWORD"] = "ADMIN_PASSWORD";
    ProcessEnvironmentKeys["USER_SECRET"] = "USER_SECRET";
    ProcessEnvironmentKeys["ADMIN_SECRET"] = "ADMIN_SECRET";
    ProcessEnvironmentKeys["SERVICE_TOKEN"] = "SERVICE_TOKEN";
})(ProcessEnvironmentKeys = exports.ProcessEnvironmentKeys || (exports.ProcessEnvironmentKeys = {}));
//# sourceMappingURL=enum.js.map