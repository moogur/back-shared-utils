"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoValidUserTokenException = void 0;
class NoValidUserTokenException extends Error {
    constructor(errorMessage) {
        super();
        this.errorMessage = errorMessage;
    }
}
exports.NoValidUserTokenException = NoValidUserTokenException;
//# sourceMappingURL=noValidUserTokenException.js.map