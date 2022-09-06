"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractEntity = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AbstractEntity {
    beforeInsert() {
        this.createdDate = Math.floor(Date.now() / 1000);
    }
    beforeUpdate() {
        this.updatedDate = Math.floor(Date.now() / 1000);
    }
}
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', { name: 'id' }),
    tslib_1.__metadata("design:type", String)
], AbstractEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'created_date', type: 'int4', readonly: true }),
    tslib_1.__metadata("design:type", Number)
], AbstractEntity.prototype, "createdDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ name: 'updated_date', type: 'int4', nullable: true, default: null }),
    tslib_1.__metadata("design:type", Object)
], AbstractEntity.prototype, "updatedDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.BeforeInsert)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AbstractEntity.prototype, "beforeInsert", null);
tslib_1.__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AbstractEntity.prototype, "beforeUpdate", null);
exports.AbstractEntity = AbstractEntity;
//# sourceMappingURL=abstract.entity.js.map