export declare function getCacheConfig(): false | {
    options: {
        socket: {
            path: string | undefined;
        };
        url?: undefined;
        password?: undefined;
    };
    type?: "redis" | "database" | "ioredis" | "ioredis/cluster" | undefined;
    duration: number;
} | {
    options: {
        url: string | undefined;
        password: string | undefined;
        socket?: undefined;
    };
    type?: "redis" | "database" | "ioredis" | "ioredis/cluster" | undefined;
    duration: number;
};
