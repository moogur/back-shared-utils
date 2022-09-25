"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class BaseEntity {
    baseBeforeInsert() {
        this.createdDate = Math.floor(Date.now() / 1000);
    }
    baseBeforeUpdate() {
        this.updatedDate = Math.floor(Date.now() / 1000);
    }
}
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', { name: 'id' }),
    tslib_1.__metadata("design:type", String)
], BaseEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'created_date', type: 'int4', readonly: true }),
    tslib_1.__metadata("design:type", Number)
], BaseEntity.prototype, "createdDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'updated_date', type: 'int4', nullable: true }),
    tslib_1.__metadata("design:type", Object)
], BaseEntity.prototype, "updatedDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.BeforeInsert)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], BaseEntity.prototype, "baseBeforeInsert", null);
tslib_1.__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], BaseEntity.prototype, "baseBeforeUpdate", null);
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base.entity.js.map