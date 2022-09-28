import { Request } from 'express';

export type ExpressWithUserIdRequestType = {
  userId: string | null;
} & Request;
