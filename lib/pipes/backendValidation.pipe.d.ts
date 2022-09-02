import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class BackendValidationPipe implements PipeTransform {
    transform<T>(value: T, metadata: ArgumentMetadata): Promise<T>;
}
