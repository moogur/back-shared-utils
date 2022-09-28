import { HttpStatus } from '@nestjs/common';
import { BadRequestError, InternalServerError, OnlyId, UnauthorizedError, UnprocessableEntityError } from '../swagger';
export declare const unauthorizedErrorTypeSwagger: {
    readonly status: HttpStatus.UNAUTHORIZED;
    readonly type: typeof UnauthorizedError;
    readonly description: "Unauthorized";
};
export declare const internalServerErrorTypeSwagger: {
    readonly status: HttpStatus.INTERNAL_SERVER_ERROR;
    readonly type: typeof InternalServerError;
    readonly description: "Internal server error";
};
export declare const unprocessableEntityErrorSwagger: {
    readonly status: HttpStatus.UNPROCESSABLE_ENTITY;
    readonly type: typeof UnprocessableEntityError;
    readonly description: "Bad request";
};
export declare const badRequestErrorSwagger: {
    readonly status: HttpStatus.BAD_REQUEST;
    readonly type: typeof BadRequestError;
    readonly description: "Bad request";
};
export declare const createEntityResponseOnlyIdSwagger: {
    readonly status: HttpStatus.CREATED;
    readonly type: typeof OnlyId;
};
export declare const okEntityResponseOnlyIdSwagger: {
    readonly status: HttpStatus.OK;
    readonly type: typeof OnlyId;
};
