import { HttpStatus } from '@nestjs/common';

import { BadRequestError, InternalServerError, OnlyId, UnauthorizedError, UnprocessableEntityError } from '@swagger';

import { errorStatusMessages } from './messages';

export const unauthorizedErrorTypeSwagger = {
  status: HttpStatus.UNAUTHORIZED,
  type: UnauthorizedError,
  description: errorStatusMessages[HttpStatus.UNAUTHORIZED],
} as const;

export const internalServerErrorTypeSwagger = {
  status: HttpStatus.INTERNAL_SERVER_ERROR,
  type: InternalServerError,
  description: errorStatusMessages[HttpStatus.INTERNAL_SERVER_ERROR],
} as const;

export const unprocessableEntityErrorSwagger = {
  status: HttpStatus.UNPROCESSABLE_ENTITY,
  type: UnprocessableEntityError,
  description: errorStatusMessages[HttpStatus.UNPROCESSABLE_ENTITY],
} as const;

export const badRequestErrorSwagger = {
  status: HttpStatus.BAD_REQUEST,
  type: BadRequestError,
  description: errorStatusMessages[HttpStatus.BAD_REQUEST],
} as const;

export const createEntityResponseOnlyIdSwagger = { status: HttpStatus.CREATED, type: OnlyId } as const;

export const okEntityResponseOnlyIdSwagger = { status: HttpStatus.OK, type: OnlyId } as const;
