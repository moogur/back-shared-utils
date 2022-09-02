import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { errorStatusMessages } from 'const';

export class UnauthorizedResponseDto {
  @ApiProperty({ example: errorStatusMessages[HttpStatus.UNAUTHORIZED] })
  readonly message: string;

  @ApiProperty({ example: HttpStatus.UNAUTHORIZED })
  readonly statusCode: number;
}