"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const _types_1 = require("../types");
function getVersion() {
    const appVersion = process.env[_types_1.ProcessEnvironmentKeys.AppVersion];
    const mode = process.env[_types_1.ProcessEnvironmentKeys.Mode];
    switch (mode) {
        case _types_1.WorkModeEnum.Production:
            return appVersion !== null && appVersion !== void 0 ? appVersion : '0.0.0';
        case _types_1.WorkModeEnum.Development:
            return 'development';
        default:
            return '';
    }
}
function setupSwagger({ app, swaggerDescription, swaggerTitle, needBearerAuth, }) {
    if (process.env[_types_1.ProcessEnvironmentKeys.Mode] === _types_1.WorkModeEnum.Test)
        return;
    const config = new swagger_1.DocumentBuilder()
        .setTitle(swaggerTitle)
        .setDescription(swaggerDescription)
        .setVersion(getVersion())
        .setExternalDoc('json', '/swagger-json');
    if (needBearerAuth)
        config.addBearerAuth({ type: 'http', description: 'header name: Authorization<br /><b>For services requests</b>' }, 'ServiceToken');
    const builderConfig = config.build();
    const document = swagger_1.SwaggerModule.createDocument(app, builderConfig);
    swagger_1.SwaggerModule.setup('swagger', app, document);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map