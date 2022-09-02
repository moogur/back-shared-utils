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
exports.FrontSortingAndPaginationRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
const types_1 = require("../types");
class FrontSortingAndPaginationRequestDto {
    sortOrder;
    pageSize;
    pageNumber;
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'sorting direction', enum: (0, lodash_1.values)(types_1.SortingEnum) }),
    (0, class_validator_1.IsEnum)(types_1.SortingEnum),
    (0, class_validator_1.ValidateIf)((_, value) => !(0, lodash_1.isUndefined)(value)),
    __metadata("design:type", String)
], FrontSortingAndPaginationRequestDto.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'page size', example: '10' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.ValidateIf)((_, value) => !(0, lodash_1.isUndefined)(value)),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FrontSortingAndPaginationRequestDto.prototype, "pageSize", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'current page', example: '0' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.ValidateIf)((_, value) => !(0, lodash_1.isUndefined)(value)),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FrontSortingAndPaginationRequestDto.prototype, "pageNumber", void 0);
exports.FrontSortingAndPaginationRequestDto = FrontSortingAndPaginationRequestDto;
//# sourceMappingURL=frontSortingAndPagination.request.dto.js.map