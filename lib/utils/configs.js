"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCacheConfig = void 0;
const _types_1 = require("../types");
function getCacheConfig({ mode, socketPath, password, url }) {
    const baseConfig = {
        type: 'redis',
        duration: 60000,
    };
    switch (true) {
        case !mode || mode === _types_1.WorkModeEnum.Test:
            return false;
        case Boolean(socketPath):
            return Object.assign(Object.assign({}, baseConfig), { options: {
                    'socket.path': socketPath,
                } });
        case Boolean(url && password):
            return Object.assign(Object.assign({}, baseConfig), { options: {
                    url: url,
                    password: password,
                } });
        default:
            return false;
    }
}
exports.getCacheConfig = getCacheConfig;
//# sourceMappingURL=configs.js.map