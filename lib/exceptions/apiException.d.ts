export declare class ApiException extends Error {
    code: string | null;
    status: number | null;
    statusText: string;
    data: any;
    constructor(error?: {
        code?: string | null;
        status?: number | null;
        statusText?: string;
        data?: any;
    });
}
