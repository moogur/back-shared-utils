"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequestErrorSwagger = exports.unprocessableEntityErrorSwagger = exports.internalServerErrorTypeSwagger = exports.unauthorizedErrorTypeSwagger = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("../dto");
const messages_1 = require("./messages");
exports.unauthorizedErrorTypeSwagger = {
    status: common_1.HttpStatus.UNAUTHORIZED,
    type: dto_1.UnauthorizedResponseDto,
    description: messages_1.errorStatusMessages[common_1.HttpStatus.UNAUTHORIZED],
};
exports.internalServerErrorTypeSwagger = {
    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    type: dto_1.InternalServerErrorResponseDto,
    description: messages_1.errorStatusMessages[common_1.HttpStatus.INTERNAL_SERVER_ERROR],
};
exports.unprocessableEntityErrorSwagger = {
    status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    type: dto_1.UnprocessableEntityResponseDto,
    description: messages_1.errorStatusMessages[common_1.HttpStatus.UNPROCESSABLE_ENTITY],
};
exports.badRequestErrorSwagger = {
    status: common_1.HttpStatus.BAD_REQUEST,
    type: dto_1.BadRequestResponseDto,
    description: messages_1.errorStatusMessages[common_1.HttpStatus.BAD_REQUEST],
};
//# sourceMappingURL=swagger.js.map