var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from '@nestjs/swagger';
import { PaginationResponseDto } from './pagination.response.dto';
export class PaginatedResponseDto {
    list;
    pagination;
}
__decorate([
    ApiProperty({ description: 'list of requested entity' }),
    __metadata("design:type", Array)
], PaginatedResponseDto.prototype, "list", void 0);
__decorate([
    ApiProperty({ description: 'pagination object' }),
    __metadata("design:type", PaginationResponseDto)
], PaginatedResponseDto.prototype, "pagination", void 0);
//# sourceMappingURL=paginated.response.dto.js.map