import { HttpStatus } from '@nestjs/common';
import { BadRequestResponseDto, InternalServerErrorResponseDto, UnauthorizedResponseDto, UnprocessableEntityResponseDto, } from '../dto';
import { errorStatusMessages } from './messages';
export const unauthorizedErrorTypeSwagger = {
    status: HttpStatus.UNAUTHORIZED,
    type: UnauthorizedResponseDto,
    description: errorStatusMessages[HttpStatus.UNAUTHORIZED],
};
export const internalServerErrorTypeSwagger = {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    type: InternalServerErrorResponseDto,
    description: errorStatusMessages[HttpStatus.INTERNAL_SERVER_ERROR],
};
export const unprocessableEntityErrorSwagger = {
    status: HttpStatus.UNPROCESSABLE_ENTITY,
    type: UnprocessableEntityResponseDto,
    description: errorStatusMessages[HttpStatus.UNPROCESSABLE_ENTITY],
};
export const badRequestErrorSwagger = {
    status: HttpStatus.BAD_REQUEST,
    type: BadRequestResponseDto,
    description: errorStatusMessages[HttpStatus.BAD_REQUEST],
};
//# sourceMappingURL=swagger.js.map