"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareBetween = exports.prepareLike = exports.prepareSorting = exports.preparePagination = exports.getPaginationObject = void 0;
const lodash_1 = require("lodash");
const typeorm_1 = require("typeorm");
const const_1 = require("../const");
const types_1 = require("../types");
function getPaginationObject(filter, total) {
    const pageSize = filter.pageSize ?? total;
    return {
        pageSize,
        pageNumber: !filter.pageNumber || !filter.pageSize ? 0 : filter.pageNumber,
        total,
        pageCount: (0, lodash_1.ceil)(total / pageSize),
    };
}
exports.getPaginationObject = getPaginationObject;
function preparePagination(filter) {
    if (!filter.pageSize)
        return;
    return {
        take: filter.pageSize,
        kip: (filter.pageNumber ?? 1 - 1) * filter.pageSize,
    };
}
exports.preparePagination = preparePagination;
function prepareSorting(filter) {
    return {
        order: { [filter.sortField ?? 'createdDate']: filter.sortOrder ?? types_1.SortingEnum.Desc },
    };
}
exports.prepareSorting = prepareSorting;
function prepareLike(value) {
    if (!value)
        return;
    return (0, typeorm_1.Like)(`%${value}%`);
}
exports.prepareLike = prepareLike;
function prepareBetween(from, to) {
    return (0, typeorm_1.Between)(from ?? const_1.minDateTimestamp, to ?? const_1.maxDateTimestamp);
}
exports.prepareBetween = prepareBetween;
//# sourceMappingURL=table.js.map