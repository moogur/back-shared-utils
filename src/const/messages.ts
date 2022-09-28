import { HttpStatus } from '@nestjs/common';

export const errorStatusMessages = {
  [HttpStatus.UNAUTHORIZED]: 'Unauthorized',
  [HttpStatus.INTERNAL_SERVER_ERROR]: 'Internal server error',
  [HttpStatus.UNPROCESSABLE_ENTITY]: 'Bad request',
  [HttpStatus.BAD_REQUEST]: 'Bad request',
  [HttpStatus.NOT_FOUND]: 'Not Found',
} as const;

export const customErrorStatusMessages = {
  [HttpStatus.BAD_REQUEST]: 'Payload should not be empty',
} as const;

export const customErrorMessages = {
  NOT_VALID_ISO_DATE: 'The date has a format that does not correspond to iso',
  MIN_DATE: 'The date is less than the minimum date of 1910-01-01',
  MAX_DATE: 'The date is greater than the maximum date of 2035-01-01',
  EMPTY_DATA_FOR_UPDATING_ERROR: 'No data has been transmitted for updating',
} as const;
