import { HttpStatus } from '@nestjs/common';

export const errorStatusMessages = {
  [HttpStatus.UNAUTHORIZED]: 'Unauthorized',
  [HttpStatus.INTERNAL_SERVER_ERROR]: 'Internal server error',
  [HttpStatus.UNPROCESSABLE_ENTITY]: 'Bad request',
  [HttpStatus.BAD_REQUEST]: 'Bad request',
} as const;

export const customErrorStatusMessages = {
  [HttpStatus.BAD_REQUEST]: 'Payload should not be empty',
} as const;
