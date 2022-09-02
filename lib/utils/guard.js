"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuardHelper = void 0;
const common_1 = require("@nestjs/common");
const const_1 = require("../const");
function authGuardHelper(entity) {
    if (entity)
        return true;
    throw new common_1.HttpException(const_1.errorStatusMessages[common_1.HttpStatus.UNAUTHORIZED], common_1.HttpStatus.UNAUTHORIZED);
}
exports.authGuardHelper = authGuardHelper;
//# sourceMappingURL=guard.js.map