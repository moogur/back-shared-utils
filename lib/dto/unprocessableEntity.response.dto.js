"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnprocessableEntityResponseDto = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const messages_1 = require("../const/messages");
class UnprocessableEntityResponseDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: messages_1.errorStatusMessages === null || messages_1.errorStatusMessages === void 0 ? void 0 : messages_1.errorStatusMessages[common_1.HttpStatus.UNPROCESSABLE_ENTITY] }),
    tslib_1.__metadata("design:type", String)
], UnprocessableEntityResponseDto.prototype, "message", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ example: common_1.HttpStatus.UNPROCESSABLE_ENTITY }),
    tslib_1.__metadata("design:type", Number)
], UnprocessableEntityResponseDto.prototype, "statusCode", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        example: { field: ['field is empty'] },
        additionalProperties: { type: 'array', items: { type: 'string' } },
    }),
    tslib_1.__metadata("design:type", Object)
], UnprocessableEntityResponseDto.prototype, "errors", void 0);
exports.UnprocessableEntityResponseDto = UnprocessableEntityResponseDto;
//# sourceMappingURL=unprocessableEntity.response.dto.js.map