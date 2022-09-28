"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const _api_1 = require("../api");
const _types_1 = require("../types");
const _utils_1 = require("../utils");
let AuthMiddleware = class AuthMiddleware {
    use(request, _, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield this.authRequest(request.headers.cookie);
                if ((0, lodash_1.isNull)(response.status)) {
                    const filePath = process.env[_types_1.ProcessEnvironmentKeys.ServiceTokenFilePath];
                    if (filePath) {
                        (0, _utils_1.setEnvironments)(filePath);
                        response = yield this.authRequest(request.headers.cookie);
                    }
                }
                request.userId = response.status === _types_1.UserStatusEnum.Active ? response.id : null;
            }
            catch (error) {
                console.log(error);
                request.userId = null;
            }
            finally {
                next();
            }
        });
    }
    authRequest(cookie) {
        return _api_1.authorizationService.getUserStatus({
            headers: {
                authorization: `Bearer ${process.env[_types_1.ProcessEnvironmentKeys.ServiceToken]}`,
                cookie: cookie !== null && cookie !== void 0 ? cookie : '',
            },
        });
    }
};
AuthMiddleware = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map