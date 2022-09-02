"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoValidServiceTokenException = void 0;
class NoValidServiceTokenException extends Error {
    errorMessage;
    constructor(errorMessage) {
        super();
        this.errorMessage = errorMessage;
    }
}
exports.NoValidServiceTokenException = NoValidServiceTokenException;
//# sourceMappingURL=noValidServiceTokenException.js.map