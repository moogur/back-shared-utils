"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customErrorMessages = exports.customErrorStatusMessages = exports.errorStatusMessages = void 0;
const common_1 = require("@nestjs/common");
exports.errorStatusMessages = {
    [common_1.HttpStatus.UNAUTHORIZED]: 'Unauthorized',
    [common_1.HttpStatus.INTERNAL_SERVER_ERROR]: 'Internal server error',
    [common_1.HttpStatus.UNPROCESSABLE_ENTITY]: 'Bad request',
    [common_1.HttpStatus.BAD_REQUEST]: 'Bad request',
    [common_1.HttpStatus.NOT_FOUND]: 'Not Found',
};
exports.customErrorStatusMessages = {
    [common_1.HttpStatus.BAD_REQUEST]: 'Payload should not be empty',
};
exports.customErrorMessages = {
    NOT_VALID_ISO_DATE: 'The date has a format that does not correspond to iso',
    MIN_DATE: 'The date is less than the minimum date of 1910-01-01',
    MAX_DATE: 'The date is greater than the maximum date of 2035-01-01',
    EMPTY_DATA_FOR_UPDATING_ERROR: 'No data has been transmitted for updating',
};
//# sourceMappingURL=messages.js.map