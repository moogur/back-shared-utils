import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { isNull } from 'lodash';

import { authorizationService } from '@api';
import { ExpressWithUserIdRequestType, ProcessEnvironmentKeys, UserStatusEnum } from '@types';
import { setEnvironments } from '@utils';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(request: ExpressWithUserIdRequestType, _: Response, next: NextFunction) {
    try {
      let response = await this.authRequest(request.headers.cookie);
      if (isNull(response.status)) {
        const filePath = process.env[ProcessEnvironmentKeys.ServiceTokenFilePath];

        if (filePath) {
          setEnvironments(filePath);
          response = await this.authRequest(request.headers.cookie);
        }
      }
      request.userId = response.status === UserStatusEnum.Active ? response.id : null;
    } catch (error) {
      console.log(error);
      request.userId = null;
    } finally {
      next();
    }
  }

  private authRequest(cookie?: string) {
    return authorizationService.getUserStatus({
      headers: {
        authorization: `Bearer ${process.env[ProcessEnvironmentKeys.ServiceToken]}`,
        cookie: cookie ?? '',
      },
    });
  }
}
