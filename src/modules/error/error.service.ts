import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { getValidationErrorMessageForResponseFront } from 'utils';

@Injectable()
export class ErrorService {
  throwUnprocessableError(errors: Record<string, string[] | string>): never {
    throw new HttpException(getValidationErrorMessageForResponseFront(errors), HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
