import { HttpException, HttpStatus } from '@nestjs/common';
import { errorStatusMessages } from '../const';
export function authGuardHelper(entity) {
    if (entity)
        return true;
    throw new HttpException(errorStatusMessages[HttpStatus.UNAUTHORIZED], HttpStatus.UNAUTHORIZED);
}
//# sourceMappingURL=guard.js.map