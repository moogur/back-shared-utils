"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheConfig = void 0;
const types_1 = require("../types");
function getCacheConfig({ mode, socketPath, password, url }) {
    const baseConfig = {
        type: 'redis',
        duration: 60_000,
    };
    switch (true) {
        case !mode || mode === types_1.WorkModeEnum.Test:
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
exports.getCacheConfig = getCacheConfig;
//# sourceMappingURL=configs.js.map