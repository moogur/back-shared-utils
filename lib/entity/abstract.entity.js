var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BeforeInsert, Column, PrimaryGeneratedColumn, BeforeUpdate } from 'typeorm';
export class AbstractEntity {
    id;
    createdDate;
    updatedDate;
    beforeInsert() {
        this.createdDate = Math.floor(Date.now() / 1000);
    }
    beforeUpdate() {
        this.updatedDate = Math.floor(Date.now() / 1000);
    }
}
__decorate([
    PrimaryGeneratedColumn('uuid', { name: 'id' }),
    __metadata("design:type", String)
], AbstractEntity.prototype, "id", void 0);
__decorate([
    Column({ name: 'created_date', type: 'int4', readonly: true }),
    __metadata("design:type", Number)
], AbstractEntity.prototype, "createdDate", void 0);
__decorate([
    Column({ name: 'updated_date', type: 'int4', nullable: true, default: null }),
    __metadata("design:type", Object)
], AbstractEntity.prototype, "updatedDate", void 0);
__decorate([
    BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AbstractEntity.prototype, "beforeInsert", null);
__decorate([
    BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AbstractEntity.prototype, "beforeUpdate", null);
//# sourceMappingURL=abstract.entity.js.map