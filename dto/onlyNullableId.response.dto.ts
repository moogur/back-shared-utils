import { ApiProperty } from '@nestjs/swagger';

export class OnlyNullableIdResponseDto {
  @ApiProperty({ description: 'entity id', example: '7c6678a5-6a48-43b5-aedf-6ff37ffcfda9', nullable: true })
  readonly id: string | null;
}
