import { ApiProperty } from '@nestjs/swagger';

export class OnlyId {
  @ApiProperty({ description: 'entity id', example: '7c6678a5-6a48-43b5-aedf-6ff37ffcfda9' })
  readonly id: string;
}
