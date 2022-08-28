import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, ValidateIf } from 'class-validator';
import { isUndefined, values } from 'lodash';

import { SortingEnum } from 'types';

export class FrontSortingAndPaginationRequestDto {
  @ApiPropertyOptional({ description: 'sorting direction', enum: values(SortingEnum) })
  @IsEnum(SortingEnum)
  @ValidateIf((_, value) => !isUndefined(value))
  readonly sortOrder?: SortingEnum;

  @ApiPropertyOptional({ description: 'page size', example: '10' })
  @IsInt()
  @ValidateIf((_, value) => !isUndefined(value))
  @Type(() => Number)
  readonly pageSize?: number;

  @ApiPropertyOptional({ description: 'current page', example: '0' })
  @IsInt()
  @ValidateIf((_, value) => !isUndefined(value))
  @Type(() => Number)
  readonly pageNumber?: number;
}
