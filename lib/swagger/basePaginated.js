"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePaginated = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const pagination_1 = require("./pagination");
class BasePaginated {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'list of requested entity' }),
    tslib_1.__metadata("design:type", Array)
], BasePaginated.prototype, "list", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'pagination object' }),
    tslib_1.__metadata("design:type", pagination_1.Pagination)
], BasePaginated.prototype, "pagination", void 0);
exports.BasePaginated = BasePaginated;
//# sourceMappingURL=basePaginated.js.map