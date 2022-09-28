"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationApi = void 0;
const baseApi_1 = require("../baseApi");
class AuthorizationApi extends baseApi_1.BaseApi {
    getUserStatus(config) {
        return this.request(Object.assign({ method: 'get', url: '/service/getUserStatus' }, config));
    }
}
exports.AuthorizationApi = AuthorizationApi;
//# sourceMappingURL=authorizationApi.js.map