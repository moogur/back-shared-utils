import { ApiProperty } from '@nestjs/swagger';

import { PaginationResponseDto } from './pagination.response.dto';

export class PaginatedResponseDto<T> {
  @ApiProperty({ description: 'list of requested entity' })
  readonly list: T[];

  @ApiProperty({ description: 'pagination object' })
  readonly pagination: PaginationResponseDto;
}
