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
exports.PaginationResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class PaginationResponseDto {
    pageSize;
    pageNumber;
    pageCount;
    total;
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'page size', example: '10' }),
    __metadata("design:type", Number)
], PaginationResponseDto.prototype, "pageSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'current page', example: '0' }),
    __metadata("design:type", Number)
], PaginationResponseDto.prototype, "pageNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'total number of pages according to sorting', example: '1' }),
    __metadata("design:type", Number)
], PaginationResponseDto.prototype, "pageCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the total number of items in the database according to sorting', example: '10' }),
    __metadata("design:type", Number)
], PaginationResponseDto.prototype, "total", void 0);
exports.PaginationResponseDto = PaginationResponseDto;
//# sourceMappingURL=pagination.response.dto.js.map