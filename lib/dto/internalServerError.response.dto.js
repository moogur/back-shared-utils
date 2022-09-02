var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { errorStatusMessages } from '../const';
export class InternalServerErrorResponseDto {
    message;
    statusCode;
}
__decorate([
    ApiProperty({ example: errorStatusMessages[HttpStatus.INTERNAL_SERVER_ERROR] }),
    __metadata("design:type", String)
], InternalServerErrorResponseDto.prototype, "message", void 0);
__decorate([
    ApiProperty({ example: HttpStatus.INTERNAL_SERVER_ERROR }),
    __metadata("design:type", Number)
], InternalServerErrorResponseDto.prototype, "statusCode", void 0);
//# sourceMappingURL=internalServerError.response.dto.js.map