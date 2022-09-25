"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendValidationPipe = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
const _const_1 = require("../const");
const _utils_1 = require("../utils");
class BackendValidationPipe {
    constructor(config = {}) {
        this.config = { transform: true, isEmpty: false };
        this.config = Object.assign(Object.assign({}, this.config), config);
    }
    transform(value, metadata) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if ((0, lodash_1.isNil)(value) || typeof value !== 'object' || !metadata.metatype)
                return value;
            if (!this.config.isEmpty && (0, lodash_1.isEmpty)(value))
                throw new common_1.HttpException(_const_1.customErrorStatusMessages[common_1.HttpStatus.BAD_REQUEST], common_1.HttpStatus.BAD_REQUEST);
            const object = (0, class_transformer_1.plainToClass)(metadata.metatype, value);
            const errors = yield (0, class_validator_1.validate)(object);
            if (errors.length === 0)
                return this.config.transform ? object : value;
            throw new common_1.HttpException((0, _utils_1.getValidationErrorMessageForResponseFront)(errors), common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        });
    }
}
exports.BackendValidationPipe = BackendValidationPipe;
//# sourceMappingURL=backendValidation.pipe.js.map