"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimestamp = exports.getNullableISODate = exports.getISODate = void 0;
function getISODate(timestamp) {
    return new Date(timestamp * 1000).toISOString();
}
exports.getISODate = getISODate;
function getNullableISODate(timestamp) {
    if (timestamp === null)
        return timestamp;
    return getISODate(timestamp);
}
exports.getNullableISODate = getNullableISODate;
function getTimestamp(date) {
    return Math.floor(new Date(date).getTime() / 1000);
}
exports.getTimestamp = getTimestamp;
//# sourceMappingURL=date.js.map