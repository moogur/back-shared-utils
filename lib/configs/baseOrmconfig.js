"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseOrmconfig = void 0;
const _types_1 = require("../types");
exports.baseOrmconfig = {
    type: 'postgres',
    useUTC: true,
    synchronize: false,
    migrationsRun: true,
    host: process.env[_types_1.ProcessEnvironmentKeys.DatabaseHost],
    port: Number(process.env[_types_1.ProcessEnvironmentKeys.DatabasePort]),
    username: process.env[_types_1.ProcessEnvironmentKeys.DatabaseUser],
    password: process.env[_types_1.ProcessEnvironmentKeys.DatabasePassword],
    database: process.env[_types_1.ProcessEnvironmentKeys.DatabaseBase],
};
//# sourceMappingURL=baseOrmconfig.js.map