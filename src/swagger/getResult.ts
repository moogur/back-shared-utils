import { ApiProperty } from '@nestjs/swagger';

export class GetResult {
  @ApiProperty({ description: 'request success rate', example: true })
  readonly result: boolean;
}
