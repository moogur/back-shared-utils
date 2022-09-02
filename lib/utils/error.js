import { HttpStatus } from '@nestjs/common';
import { isArray, mapValues, reduce, values } from 'lodash';
import { errorStatusMessages } from '../const';
export function getValidationErrorMessageForResponseFront(errors) {
    const convertedErrors = isArray(errors)
        ? reduce(errors, (accumulator, error) => {
            accumulator[error.property] = values(error.constraints);
            return accumulator;
        }, {})
        : mapValues(errors, (value) => (isArray(value) ? value : [value]));
    return {
        errors: convertedErrors,
        message: errorStatusMessages[HttpStatus.UNPROCESSABLE_ENTITY],
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    };
}
//# sourceMappingURL=error.js.map