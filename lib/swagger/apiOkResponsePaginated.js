import { applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PaginatedResponseDto } from '../dto';
export const ApiOkResponsePaginated = (dataDto) => applyDecorators(ApiExtraModels(PaginatedResponseDto, dataDto), ApiOkResponse({
    schema: {
        allOf: [
            { $ref: getSchemaPath(PaginatedResponseDto) },
            {
                properties: {
                    list: {
                        type: 'array',
                        items: { $ref: getSchemaPath(dataDto) },
                    },
                },
            },
        ],
    },
}));
//# sourceMappingURL=apiOkResponsePaginated.js.map