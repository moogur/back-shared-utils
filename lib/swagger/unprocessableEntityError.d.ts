export declare class UnprocessableEntityError {
    readonly message: string;
    readonly statusCode: number;
    readonly errors: Record<string, string[]>;
}
