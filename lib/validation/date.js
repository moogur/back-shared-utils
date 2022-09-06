"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransformToTimestamp = void 0;
const _utils_1 = require("../utils");
function getTransformToTimestamp(isoDate) {
    if (typeof isoDate !== 'string')
        return isoDate;
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(isoDate))
        return Number.NaN;
    return (0, _utils_1.getTimestamp)(isoDate);
}
exports.getTransformToTimestamp = getTransformToTimestamp;
//# sourceMappingURL=date.js.map