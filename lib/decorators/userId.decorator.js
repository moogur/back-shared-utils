"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const common_1 = require("@nestjs/common");
exports.UserId = (0, common_1.createParamDecorator)((_, context) => {
    var _a;
    return ((_a = context === null || context === void 0 ? void 0 : context.switchToHttp().getRequest()) === null || _a === void 0 ? void 0 : _a.userId) || null;
});
//# sourceMappingURL=userId.decorator.js.map