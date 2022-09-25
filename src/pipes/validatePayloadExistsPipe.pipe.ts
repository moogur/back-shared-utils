import { HttpException, HttpStatus, PipeTransform } from '@nestjs/common';
import { isEmpty, isNil } from 'lodash';

import { customErrorStatusMessages } from '@const';

export class ValidatePayloadExistsPipe implements PipeTransform {
  transform<T>(value: T) {
    if (isNil(value) || typeof value !== 'object') return value;

    if (isEmpty(value))
      throw new HttpException(customErrorStatusMessages[HttpStatus.BAD_REQUEST], HttpStatus.BAD_REQUEST);

    return value;
  }
}
