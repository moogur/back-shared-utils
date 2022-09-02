"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidationErrorMessageForResponseFront = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const const_1 = require("../const");
function getValidationErrorMessageForResponseFront(errors) {
    const convertedErrors = (0, lodash_1.isArray)(errors)
        ? (0, lodash_1.reduce)(errors, (accumulator, error) => {
            accumulator[error.property] = (0, lodash_1.values)(error.constraints);
            return accumulator;
        }, {})
        : (0, lodash_1.mapValues)(errors, (value) => ((0, lodash_1.isArray)(value) ? value : [value]));
    return {
        errors: convertedErrors,
        message: const_1.errorStatusMessages[common_1.HttpStatus.UNPROCESSABLE_ENTITY],
        statusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    };
}
exports.getValidationErrorMessageForResponseFront = getValidationErrorMessageForResponseFront;
//# sourceMappingURL=error.js.map