import { getTimestamp } from '../utils';
export function getTransformToTimestamp(isoDate) {
    if (typeof isoDate !== 'string')
        return isoDate;
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(isoDate))
        return Number.NaN;
    return getTimestamp(isoDate);
}
//# sourceMappingURL=date.js.map