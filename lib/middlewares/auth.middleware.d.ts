import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { ExpressWithUserIdRequestType } from '../types';
export declare class AuthMiddleware implements NestMiddleware {
    use(request: ExpressWithUserIdRequestType, _: Response, next: NextFunction): Promise<void>;
    private authRequest;
}
