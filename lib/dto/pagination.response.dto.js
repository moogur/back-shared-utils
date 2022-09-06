"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationResponseDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class PaginationResponseDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'page size', example: '10' }),
    tslib_1.__metadata("design:type", Number)
], PaginationResponseDto.prototype, "pageSize", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'current page', example: '0' }),
    tslib_1.__metadata("design:type", Number)
], PaginationResponseDto.prototype, "pageNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'total number of pages according to sorting', example: '1' }),
    tslib_1.__metadata("design:type", Number)
], PaginationResponseDto.prototype, "pageCount", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the total number of items in the database according to sorting', example: '10' }),
    tslib_1.__metadata("design:type", Number)
], PaginationResponseDto.prototype, "total", void 0);
exports.PaginationResponseDto = PaginationResponseDto;
//# sourceMappingURL=pagination.response.dto.js.map