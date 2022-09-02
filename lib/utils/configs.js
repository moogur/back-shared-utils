import { WorkModeEnum } from '../types';
export function getCacheConfig({ mode, socketPath, password, url }) {
    const baseConfig = {
        type: 'redis',
        duration: 60_000,
    };
    switch (true) {
        case !mode || mode === WorkModeEnum.Test:
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
//# sourceMappingURL=configs.js.map