"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodeTokenException = void 0;
class DecodeTokenException extends Error {
    errorMessage;
    constructor(errorMessage) {
        super();
        this.errorMessage = errorMessage;
    }
}
exports.DecodeTokenException = DecodeTokenException;
//# sourceMappingURL=decodeTokenException.js.map