"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiOkResponsePaginated = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const basePaginated_1 = require("./basePaginated");
const ApiOkResponsePaginated = (dataDto) => (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(basePaginated_1.BasePaginated, dataDto), (0, swagger_1.ApiOkResponse)({
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(basePaginated_1.BasePaginated) },
            {
                properties: {
                    list: {
                        type: 'array',
                        items: { $ref: (0, swagger_1.getSchemaPath)(dataDto) },
                    },
                },
            },
        ],
    },
}));
exports.ApiOkResponsePaginated = ApiOkResponsePaginated;
//# sourceMappingURL=apiOkResponsePaginated.js.map