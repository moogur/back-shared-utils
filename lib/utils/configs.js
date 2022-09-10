"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheConfig = void 0;
const _types_1 = require("../types");
function getCacheConfig() {
    const mode = process.env[_types_1.ProcessEnvironmentKeys.Mode];
    const baseConfig = {
        type: 'redis',
        duration: 60000,
    };
    switch (true) {
        case !mode || mode === _types_1.WorkModeEnum.Test:
            return false;
        case Boolean(process.env[_types_1.ProcessEnvironmentKeys.RedisSocketPath]):
            return Object.assign(Object.assign({}, baseConfig), { options: {
                    socket: {
                        path: process.env[_types_1.ProcessEnvironmentKeys.RedisSocketPath],
                    },
                } });
        case Boolean(process.env[_types_1.ProcessEnvironmentKeys.RedisUrl] && process.env[_types_1.ProcessEnvironmentKeys.RedisPassword]):
            return Object.assign(Object.assign({}, baseConfig), { options: {
                    url: process.env[_types_1.ProcessEnvironmentKeys.RedisUrl],
                    password: process.env[_types_1.ProcessEnvironmentKeys.RedisPassword],
                } });
        default:
            return false;
    }
}
exports.getCacheConfig = getCacheConfig;
//# sourceMappingURL=configs.js.map