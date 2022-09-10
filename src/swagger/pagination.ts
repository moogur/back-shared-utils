import { ApiProperty } from '@nestjs/swagger';

export class Pagination {
  @ApiProperty({ description: 'page size', example: '10' })
  readonly pageSize: number;

  @ApiProperty({ description: 'current page', example: '0' })
  readonly pageNumber: number;

  @ApiProperty({ description: 'total number of pages according to sorting', example: '1' })
  readonly pageCount: number;

  @ApiProperty({ description: 'the total number of items in the database according to sorting', example: '10' })
  readonly total: number;
}
