"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiException = void 0;
class ApiException extends Error {
    constructor(error = {}) {
        var _a, _b, _c, _d;
        super();
        this.code = (_a = error === null || error === void 0 ? void 0 : error.code) !== null && _a !== void 0 ? _a : null;
        this.status = (_b = error === null || error === void 0 ? void 0 : error.status) !== null && _b !== void 0 ? _b : null;
        this.statusText = (_c = error === null || error === void 0 ? void 0 : error.statusText) !== null && _c !== void 0 ? _c : 'Unknown error';
        this.data = (_d = error === null || error === void 0 ? void 0 : error.data) !== null && _d !== void 0 ? _d : {};
    }
}
exports.ApiException = ApiException;
//# sourceMappingURL=apiException.js.map