"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorStatusMessages = void 0;
const common_1 = require("@nestjs/common");
exports.errorStatusMessages = {
    [common_1.HttpStatus.UNAUTHORIZED]: 'Unauthorized',
    [common_1.HttpStatus.INTERNAL_SERVER_ERROR]: 'Internal server error',
    [common_1.HttpStatus.UNPROCESSABLE_ENTITY]: 'Bad request',
    [common_1.HttpStatus.BAD_REQUEST]: 'Bad request',
};
//# sourceMappingURL=messages.js.map