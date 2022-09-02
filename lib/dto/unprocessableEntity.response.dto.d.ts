export declare class UnprocessableEntityResponseDto {
    readonly message: string;
    readonly statusCode: number;
    readonly errors: Record<string, string[]>;
}
