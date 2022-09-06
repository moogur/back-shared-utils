"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const error_service_1 = require("./error.service");
let ErrorModule = class ErrorModule {
};
ErrorModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [error_service_1.ErrorService],
        exports: [error_service_1.ErrorService],
    })
], ErrorModule);
exports.ErrorModule = ErrorModule;
//# sourceMappingURL=error.module.js.map