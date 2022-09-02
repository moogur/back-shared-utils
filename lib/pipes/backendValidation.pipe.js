import { HttpException, HttpStatus } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { isNil } from 'lodash';
import { getValidationErrorMessageForResponseFront } from '../utils';
export class BackendValidationPipe {
    async transform(value, metadata) {
        if (isNil(value) || typeof value !== 'object' || !metadata.metatype)
            return value;
        const object = plainToClass(metadata.metatype, value);
        const errors = await validate(object);
        if (errors.length === 0)
            return value;
        throw new HttpException(getValidationErrorMessageForResponseFront(errors), HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
//# sourceMappingURL=backendValidation.pipe.js.map