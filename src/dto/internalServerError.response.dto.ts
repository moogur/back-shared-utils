import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { errorStatusMessages } from 'const';

export class InternalServerErrorResponseDto {
  @ApiProperty({ example: errorStatusMessages[HttpStatus.INTERNAL_SERVER_ERROR] })
  readonly message: string;

  @ApiProperty({ example: HttpStatus.INTERNAL_SERVER_ERROR })
  readonly statusCode: number;
}