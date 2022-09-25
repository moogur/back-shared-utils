import { PipeTransform } from '@nestjs/common';
export declare class ValidatePayloadExistsPipe implements PipeTransform {
    transform<T>(value: T): T;
}
