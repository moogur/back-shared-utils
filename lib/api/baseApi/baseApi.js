"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApi = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const exceptions_1 = require("../../exceptions");
class BaseApi {
    constructor(config = {}) {
        this.axiosInstance = axios_1.default.create(config);
    }
    axios() {
        return this.axiosInstance;
    }
    setBaseUrl(url) {
        this.axiosInstance.defaults.baseURL = url;
    }
    setHeaders(headers) {
        this.axiosInstance.defaults.headers.common = headers;
    }
    request(options) {
        return this.axiosInstance.request(options).then((response) => response.data, (error) => {
            var _a, _b, _c;
            throw new exceptions_1.ApiException({
                code: error === null || error === void 0 ? void 0 : error.code,
                status: (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status,
                statusText: (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.statusText,
                data: (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data,
            });
        });
    }
}
exports.BaseApi = BaseApi;
//# sourceMappingURL=baseApi.js.map