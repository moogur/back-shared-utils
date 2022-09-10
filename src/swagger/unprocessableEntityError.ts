import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { errorStatusMessages } from '@src/const/messages';

export class UnprocessableEntityError {
  @ApiProperty({ example: errorStatusMessages?.[HttpStatus.UNPROCESSABLE_ENTITY] })
  readonly message: string;

  @ApiProperty({ example: HttpStatus.UNPROCESSABLE_ENTITY })
  readonly statusCode: number;

  @ApiProperty({
    example: { field: ['field is empty'] },
    additionalProperties: { type: 'array', items: { type: 'string' } },
  })
  readonly errors: Record<string, string[]>;
}
