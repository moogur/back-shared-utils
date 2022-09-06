import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { errorStatusMessages } from '@src/const/messages';

export class BadRequestResponseDto {
  @ApiProperty({ example: HttpStatus.BAD_REQUEST })
  readonly statusCode: number;

  @ApiProperty({ example: errorStatusMessages[HttpStatus.BAD_REQUEST] })
  readonly message: string;
}
