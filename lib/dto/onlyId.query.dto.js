"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyIdQueryDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class OnlyIdQueryDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'entity id', example: '7c6678a5-6a48-43b5-aedf-6ff37ffcfda9' }),
    (0, class_validator_1.IsUUID)(),
    tslib_1.__metadata("design:type", String)
], OnlyIdQueryDto.prototype, "id", void 0);
exports.OnlyIdQueryDto = OnlyIdQueryDto;
//# sourceMappingURL=onlyId.query.dto.js.map