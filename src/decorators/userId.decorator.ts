import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { ExpressWithUserIdRequestType } from '@types';

export const UserId = createParamDecorator((_: unknown, context?: ExecutionContext) => {
  return context?.switchToHttp().getRequest<ExpressWithUserIdRequestType>()?.userId || null;
});
