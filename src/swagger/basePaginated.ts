import { ApiProperty } from '@nestjs/swagger';

import { Pagination } from './pagination';

export class BasePaginated<T> {
  @ApiProperty({ description: 'list of requested entity' })
  readonly list: T[];

  @ApiProperty({ description: 'pagination object' })
  readonly pagination: Pagination;
}
