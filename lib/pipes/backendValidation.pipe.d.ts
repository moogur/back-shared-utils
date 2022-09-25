import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
interface Config {
    transform: boolean;
    isEmpty: boolean;
}
export declare class BackendValidationPipe implements PipeTransform {
    private config;
    constructor(config?: Partial<Config>);
    transform<T>(value: T, metadata: ArgumentMetadata): Promise<any>;
}
export {};
