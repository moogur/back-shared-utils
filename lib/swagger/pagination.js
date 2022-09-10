"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class Pagination {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'page size', example: '10' }),
    tslib_1.__metadata("design:type", Number)
], Pagination.prototype, "pageSize", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'current page', example: '0' }),
    tslib_1.__metadata("design:type", Number)
], Pagination.prototype, "pageNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'total number of pages according to sorting', example: '1' }),
    tslib_1.__metadata("design:type", Number)
], Pagination.prototype, "pageCount", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the total number of items in the database according to sorting', example: '10' }),
    tslib_1.__metadata("design:type", Number)
], Pagination.prototype, "total", void 0);
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.js.map