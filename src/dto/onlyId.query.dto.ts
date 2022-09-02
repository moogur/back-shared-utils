import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class OnlyIdQueryDto {
  @ApiProperty({ description: 'entity id', example: '7c6678a5-6a48-43b5-aedf-6ff37ffcfda9' })
  @IsUUID()
  readonly id: string;
}
