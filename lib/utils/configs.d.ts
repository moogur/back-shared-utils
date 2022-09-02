import { WorkModeEnum } from '../types';
interface GetCacheConfig {
    mode?: WorkModeEnum;
    socketPath?: string;
    url?: string;
    password?: string;
}
export declare function getCacheConfig({ mode, socketPath, password, url }: GetCacheConfig): false | {
    options: {
        'socket.path': string | undefined;
        url?: undefined;
        password?: undefined;
    };
    type?: "redis" | "database" | "ioredis" | "ioredis/cluster" | undefined;
    duration: number;
} | {
    options: {
        url: string | undefined;
        password: string | undefined;
        'socket.path'?: undefined;
    };
    type?: "redis" | "database" | "ioredis" | "ioredis/cluster" | undefined;
    duration: number;
};
export {};
