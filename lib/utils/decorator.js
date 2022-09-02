"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntity = void 0;
function getEntity(entity, key) {
    return !entity ? null : key ? entity[key] : entity;
}
exports.getEntity = getEntity;
//# sourceMappingURL=decorator.js.map