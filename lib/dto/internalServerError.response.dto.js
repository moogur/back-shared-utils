"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorResponseDto = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const messages_1 = require("../const/messages");
class InternalServerErrorResponseDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: messages_1.errorStatusMessages[common_1.HttpStatus.INTERNAL_SERVER_ERROR] }),
    tslib_1.__metadata("design:type", String)
], InternalServerErrorResponseDto.prototype, "message", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: common_1.HttpStatus.INTERNAL_SERVER_ERROR }),
    tslib_1.__metadata("design:type", Number)
], InternalServerErrorResponseDto.prototype, "statusCode", void 0);
exports.InternalServerErrorResponseDto = InternalServerErrorResponseDto;
//# sourceMappingURL=internalServerError.response.dto.js.map