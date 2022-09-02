import { ceil } from 'lodash';
import { Between, Like } from 'typeorm';
import { maxDateTimestamp, minDateTimestamp } from '../const';
import { SortingEnum } from '../types';
export function getPaginationObject(filter, total) {
    const pageSize = filter.pageSize ?? total;
    return {
        pageSize,
        pageNumber: !filter.pageNumber || !filter.pageSize ? 0 : filter.pageNumber,
        total,
        pageCount: ceil(total / pageSize),
    };
}
export function preparePagination(filter) {
    if (!filter.pageSize)
        return;
    return {
        take: filter.pageSize,
        kip: (filter.pageNumber ?? 1 - 1) * filter.pageSize,
    };
}
export function prepareSorting(filter) {
    return {
        order: { [filter.sortField ?? 'createdDate']: filter.sortOrder ?? SortingEnum.Desc },
    };
}
export function prepareLike(value) {
    if (!value)
        return;
    return Like(`%${value}%`);
}
export function prepareBetween(from, to) {
    return Between(from ?? minDateTimestamp, to ?? maxDateTimestamp);
}
//# sourceMappingURL=table.js.map