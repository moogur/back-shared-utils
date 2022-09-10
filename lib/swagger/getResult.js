"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResult = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class GetResult {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ description: 'request success rate', example: true }),
    tslib_1.__metadata("design:type", Boolean)
], GetResult.prototype, "result", void 0);
exports.GetResult = GetResult;
//# sourceMappingURL=getResult.js.map