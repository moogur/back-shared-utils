import { HttpStatus, ValidationError } from '@nestjs/common';
export declare function getValidationErrorMessageForResponseFront(errors: ValidationError[] | Record<string, string | string[]>): {
    errors: Record<string, string[]>;
    message: "Bad request";
    statusCode: HttpStatus;
};
