"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatePayloadExistsPipe = void 0;
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const _const_1 = require("../const");
class ValidatePayloadExistsPipe {
    transform(value) {
        if ((0, lodash_1.isNil)(value) || typeof value !== 'object')
            return value;
        if ((0, lodash_1.isEmpty)(value))
            throw new common_1.HttpException(_const_1.customErrorStatusMessages[common_1.HttpStatus.BAD_REQUEST], common_1.HttpStatus.BAD_REQUEST);
        return value;
    }
}
exports.ValidatePayloadExistsPipe = ValidatePayloadExistsPipe;
//# sourceMappingURL=validatePayloadExistsPipe.pipe.js.map