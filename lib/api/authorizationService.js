"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationService = void 0;
const authorizationApi_1 = require("./authorizationApi");
const baseUrls_1 = require("./baseUrls");
exports.authorizationService = new authorizationApi_1.AuthorizationApi({
    baseURL: baseUrls_1.AUTHORIZATION_BASEURL,
});
//# sourceMappingURL=authorizationService.js.map