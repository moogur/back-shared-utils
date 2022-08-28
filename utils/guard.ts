import { HttpException, HttpStatus } from '@nestjs/common';

import { errorStatusMessages } from 'const';

export function authGuardHelper<T>(entity?: T | null) {
  if (entity) return true;

  throw new HttpException(errorStatusMessages[HttpStatus.UNAUTHORIZED], HttpStatus.UNAUTHORIZED);
}
