"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const _utils_1 = require("../utils");
let AuthGuard = class AuthGuard {
    canActivate(context) {
        return (0, _utils_1.authGuardHelper)(context.switchToHttp().getRequest().userId);
    }
};
AuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map