import { ArgumentMetadata, HttpException, HttpStatus, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { isEmpty, isNil } from 'lodash';

import { customErrorStatusMessages } from '@const';
import { getValidationErrorMessageForResponseFront } from '@utils';

interface Config {
  transform: boolean;
  isEmpty: boolean;
}

export class BackendValidationPipe implements PipeTransform {
  private config: Config = { transform: true, isEmpty: false };

  constructor(config: Partial<Config> = {}) {
    this.config = { ...this.config, ...config };
  }

  async transform<T>(value: T, metadata: ArgumentMetadata) {
    if (isNil(value) || typeof value !== 'object' || !metadata.metatype) return value;

    if (!this.config.isEmpty && isEmpty(value))
      throw new HttpException(customErrorStatusMessages[HttpStatus.BAD_REQUEST], HttpStatus.BAD_REQUEST);

    const object = plainToClass(metadata.metatype, value);
    const errors = await validate(object);
    if (errors.length === 0) return this.config.transform ? object : value;

    throw new HttpException(getValidationErrorMessageForResponseFront(errors), HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
