"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.okEntityResponseOnlyIdSwagger = exports.createEntityResponseOnlyIdSwagger = exports.badRequestErrorSwagger = exports.unprocessableEntityErrorSwagger = exports.internalServerErrorTypeSwagger = exports.unauthorizedErrorTypeSwagger = void 0;
const common_1 = require("@nestjs/common");
const _swagger_1 = require("../swagger");
const messages_1 = require("./messages");
exports.unauthorizedErrorTypeSwagger = {
    status: common_1.HttpStatus.UNAUTHORIZED,
    type: _swagger_1.UnauthorizedError,
    description: messages_1.errorStatusMessages[common_1.HttpStatus.UNAUTHORIZED],
};
exports.internalServerErrorTypeSwagger = {
    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
    type: _swagger_1.InternalServerError,
    description: messages_1.errorStatusMessages[common_1.HttpStatus.INTERNAL_SERVER_ERROR],
};
exports.unprocessableEntityErrorSwagger = {
    status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    type: _swagger_1.UnprocessableEntityError,
    description: messages_1.errorStatusMessages[common_1.HttpStatus.UNPROCESSABLE_ENTITY],
};
exports.badRequestErrorSwagger = {
    status: common_1.HttpStatus.BAD_REQUEST,
    type: _swagger_1.BadRequestError,
    description: messages_1.errorStatusMessages[common_1.HttpStatus.BAD_REQUEST],
};
exports.createEntityResponseOnlyIdSwagger = { status: common_1.HttpStatus.CREATED, type: _swagger_1.OnlyId };
exports.okEntityResponseOnlyIdSwagger = { status: common_1.HttpStatus.OK, type: _swagger_1.OnlyId };
//# sourceMappingURL=swagger.js.map