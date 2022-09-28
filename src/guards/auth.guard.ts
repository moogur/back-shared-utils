import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ExpressWithUserIdRequestType } from '@types';
import { authGuardHelper } from '@utils';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return authGuardHelper(context.switchToHttp().getRequest<ExpressWithUserIdRequestType>().userId);
  }
}
