import { ceil } from 'lodash';
import { ArrayContains, Between, Like } from 'typeorm';

import { maxDateTimestamp, minDateTimestamp } from '@const';
import { SortingEnum } from '@types';

export function getPaginationObject<T extends { pageSize?: number; pageNumber?: number }>(filter: T, total: number) {
  const pageSize = filter.pageSize ?? total;

  return {
    pageSize,
    pageNumber: !filter.pageNumber || !filter.pageSize ? 0 : filter.pageNumber,
    total,
    pageCount: ceil(total / pageSize),
  };
}

export function preparePagination<T extends { pageSize?: number; pageNumber?: number }>(filter: T) {
  if (!filter.pageSize) return;

  return {
    take: filter.pageSize,
    kip: (filter.pageNumber ?? 1 - 1) * filter.pageSize,
  };
}

export function prepareSorting<T extends { sortOrder?: SortingEnum; sortField?: string }>(filter: T) {
  return {
    order: { [filter.sortField ?? 'createdDate']: filter.sortOrder ?? SortingEnum.Desc },
  };
}

export function prepareLike<T>(value?: T) {
  if (!value) return;

  return Like(`%${value}%`);
}

export function prepareBetween(from?: number, to?: number) {
  return Between(from ?? minDateTimestamp, to ?? maxDateTimestamp);
}

export function prepareArrayContains<T>(value: T) {
  if (!value) return;

  return ArrayContains([value]);
}
