import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

import { PaginatedResponseDto } from 'dto';

export const ApiOkResponsePaginated = <DataDto extends Type<unknown>>(dataDto: DataDto) =>
  applyDecorators(
    ApiExtraModels(PaginatedResponseDto, dataDto),
    ApiOkResponse({
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
    }),
  );
