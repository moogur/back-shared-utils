"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyNullableId = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class OnlyNullableId {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'entity id', example: '7c6678a5-6a48-43b5-aedf-6ff37ffcfda9', nullable: true }),
    tslib_1.__metadata("design:type", Object)
], OnlyNullableId.prototype, "id", void 0);
exports.OnlyNullableId = OnlyNullableId;
//# sourceMappingURL=onlyNullableId.js.map