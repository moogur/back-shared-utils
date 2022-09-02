import { HttpStatus } from '@nestjs/common';
import { BadRequestResponseDto, InternalServerErrorResponseDto, UnauthorizedResponseDto, UnprocessableEntityResponseDto } from '../dto';
export declare const unauthorizedErrorTypeSwagger: {
    readonly status: HttpStatus.UNAUTHORIZED;
    readonly type: typeof UnauthorizedResponseDto;
    readonly description: "Unauthorized";
};
export declare const internalServerErrorTypeSwagger: {
    readonly status: HttpStatus.INTERNAL_SERVER_ERROR;
    readonly type: typeof InternalServerErrorResponseDto;
    readonly description: "Internal server error";
};
export declare const unprocessableEntityErrorSwagger: {
    readonly status: HttpStatus.UNPROCESSABLE_ENTITY;
    readonly type: typeof UnprocessableEntityResponseDto;
    readonly description: "Bad request";
};
export declare const badRequestErrorSwagger: {
    readonly status: HttpStatus.BAD_REQUEST;
    readonly type: typeof BadRequestResponseDto;
    readonly description: "Bad request";
};
