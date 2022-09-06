"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const _utils_1 = require("../../utils");
let ErrorService = class ErrorService {
    throwUnprocessableError(errors) {
        throw new common_1.HttpException((0, _utils_1.getValidationErrorMessageForResponseFront)(errors), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
};
ErrorService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ErrorService);
exports.ErrorService = ErrorService;
//# sourceMappingURL=error.service.js.map