"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareBetween = exports.prepareLike = exports.prepareSorting = exports.preparePagination = exports.getPaginationObject = void 0;
const lodash_1 = require("lodash");
const typeorm_1 = require("typeorm");
const _const_1 = require("../const");
const _types_1 = require("../types");
function getPaginationObject(filter, total) {
    var _a;
    const pageSize = (_a = filter.pageSize) !== null && _a !== void 0 ? _a : total;
    return {
        pageSize,
        pageNumber: !filter.pageNumber || !filter.pageSize ? 0 : filter.pageNumber,
        total,
        pageCount: (0, lodash_1.ceil)(total / pageSize),
    };
}
exports.getPaginationObject = getPaginationObject;
function preparePagination(filter) {
    var _a;
    if (!filter.pageSize)
        return;
    return {
        take: filter.pageSize,
        kip: ((_a = filter.pageNumber) !== null && _a !== void 0 ? _a : 1 - 1) * filter.pageSize,
    };
}
exports.preparePagination = preparePagination;
function prepareSorting(filter) {
    var _a, _b;
    return {
        order: { [(_a = filter.sortField) !== null && _a !== void 0 ? _a : 'createdDate']: (_b = filter.sortOrder) !== null && _b !== void 0 ? _b : _types_1.SortingEnum.Desc },
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
    return (0, typeorm_1.Between)(from !== null && from !== void 0 ? from : _const_1.minDateTimestamp, to !== null && to !== void 0 ? to : _const_1.maxDateTimestamp);
}
exports.prepareBetween = prepareBetween;
//# sourceMappingURL=table.js.map