"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedResponseDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const pagination_response_dto_1 = require("./pagination.response.dto");
class PaginatedResponseDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'list of requested entity' }),
    tslib_1.__metadata("design:type", Array)
], PaginatedResponseDto.prototype, "list", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'pagination object' }),
    tslib_1.__metadata("design:type", pagination_response_dto_1.PaginationResponseDto)
], PaginatedResponseDto.prototype, "pagination", void 0);
exports.PaginatedResponseDto = PaginatedResponseDto;
//# sourceMappingURL=paginated.response.dto.js.map