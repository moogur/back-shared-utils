"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
const utils_1 = require("../utils");
class BackendValidationPipe {
    async transform(value, metadata) {
        if ((0, lodash_1.isNil)(value) || typeof value !== 'object' || !metadata.metatype)
            return value;
        const object = (0, class_transformer_1.plainToClass)(metadata.metatype, value);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length === 0)
            return value;
        throw new common_1.HttpException((0, utils_1.getValidationErrorMessageForResponseFront)(errors), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
exports.BackendValidationPipe = BackendValidationPipe;
//# sourceMappingURL=backendValidation.pipe.js.map