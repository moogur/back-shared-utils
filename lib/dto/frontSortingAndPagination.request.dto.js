"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontSortingAndPaginationRequestDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
const _types_1 = require("../types");
class FrontSortingAndPaginationRequestDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'sorting direction', enum: (0, lodash_1.values)(_types_1.SortingEnum) }),
    (0, class_validator_1.IsEnum)(_types_1.SortingEnum),
    (0, class_validator_1.ValidateIf)((_, value) => !(0, lodash_1.isUndefined)(value)),
    tslib_1.__metadata("design:type", String)
], FrontSortingAndPaginationRequestDto.prototype, "sortOrder", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'page size', example: '10' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.ValidateIf)((_, value) => !(0, lodash_1.isUndefined)(value)),
    (0, class_transformer_1.Type)(() => Number),
    tslib_1.__metadata("design:type", Number)
], FrontSortingAndPaginationRequestDto.prototype, "pageSize", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'current page', example: '0' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.ValidateIf)((_, value) => !(0, lodash_1.isUndefined)(value)),
    (0, class_transformer_1.Type)(() => Number),
    tslib_1.__metadata("design:type", Number)
], FrontSortingAndPaginationRequestDto.prototype, "pageNumber", void 0);
exports.FrontSortingAndPaginationRequestDto = FrontSortingAndPaginationRequestDto;
//# sourceMappingURL=frontSortingAndPagination.request.dto.js.map