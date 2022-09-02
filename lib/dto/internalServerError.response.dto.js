"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorResponseDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const const_1 = require("../const");
class InternalServerErrorResponseDto {
    message;
    statusCode;
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: const_1.errorStatusMessages[common_1.HttpStatus.INTERNAL_SERVER_ERROR] }),
    __metadata("design:type", String)
], InternalServerErrorResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: common_1.HttpStatus.INTERNAL_SERVER_ERROR }),
    __metadata("design:type", Number)
], InternalServerErrorResponseDto.prototype, "statusCode", void 0);
exports.InternalServerErrorResponseDto = InternalServerErrorResponseDto;
//# sourceMappingURL=internalServerError.response.dto.js.map