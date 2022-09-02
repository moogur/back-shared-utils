import { ApiProperty } from '@nestjs/swagger';

export class GetResultResponseDto {
  @ApiProperty({ description: 'request success rate', example: true })
  readonly result: boolean;
}
