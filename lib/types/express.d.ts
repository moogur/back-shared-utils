import { Request } from 'express';
export declare type ExpressWithUserIdRequestType = {
    userId: string | null;
} & Request;
