var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, ValidateIf } from 'class-validator';
import { isUndefined, values } from 'lodash';
import { SortingEnum } from '../types';
export class FrontSortingAndPaginationRequestDto {
    sortOrder;
    pageSize;
    pageNumber;
}
__decorate([
    ApiPropertyOptional({ description: 'sorting direction', enum: values(SortingEnum) }),
    IsEnum(SortingEnum),
    ValidateIf((_, value) => !isUndefined(value)),
    __metadata("design:type", String)
], FrontSortingAndPaginationRequestDto.prototype, "sortOrder", void 0);
__decorate([
    ApiPropertyOptional({ description: 'page size', example: '10' }),
    IsInt(),
    ValidateIf((_, value) => !isUndefined(value)),
    Type(() => Number),
    __metadata("design:type", Number)
], FrontSortingAndPaginationRequestDto.prototype, "pageSize", void 0);
__decorate([
    ApiPropertyOptional({ description: 'current page', example: '0' }),
    IsInt(),
    ValidateIf((_, value) => !isUndefined(value)),
    Type(() => Number),
    __metadata("design:type", Number)
], FrontSortingAndPaginationRequestDto.prototype, "pageNumber", void 0);
//# sourceMappingURL=frontSortingAndPagination.request.dto.js.map