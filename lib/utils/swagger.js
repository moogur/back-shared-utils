"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersion = exports.setupSwagger = void 0;
const node_fs_1 = require("node:fs");
const swagger_1 = require("@nestjs/swagger");
const lodash_1 = require("lodash");
const types_1 = require("../types");
function setupSwagger({ app, mode, swaggerDescription, swaggerTitle, swaggerVersion, needBearerAuth, }) {
    if (mode === types_1.WorkModeEnum.Test)
        return;
    const config = new swagger_1.DocumentBuilder()
        .setTitle(swaggerTitle)
        .setDescription(swaggerDescription)
        .setVersion(swaggerVersion)
        .setExternalDoc('json', '/swagger-json');
    if (needBearerAuth)
        config.addBearerAuth({ type: 'http', description: 'header name: Authorization<br /><b>For services requests</b>' }, 'ServiceToken');
    const builderConfig = config.build();
    const document = swagger_1.SwaggerModule.createDocument(app, builderConfig);
    swagger_1.SwaggerModule.setup('swagger', app, document);
}
exports.setupSwagger = setupSwagger;
function getVersion(filePath) {
    try {
        const data = JSON.parse((0, node_fs_1.readFileSync)(filePath, 'utf8'));
        const version = data?.version;
        if (typeof version !== 'string')
            throw new Error('Version not found');
        return (0, lodash_1.replace)(version, /[\sv]/g, '');
    }
    catch (error) {
        console.log(error);
        return '0.0.0';
    }
}
exports.getVersion = getVersion;
//# sourceMappingURL=swagger.js.map