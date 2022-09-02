export function getISODate(timestamp) {
    return new Date(timestamp * 1000).toISOString();
}
export function getNullableISODate(timestamp) {
    if (timestamp === null)
        return timestamp;
    return getISODate(timestamp);
}
export function getTimestamp(date) {
    return Math.floor(new Date(date).getTime() / 1000);
}
//# sourceMappingURL=date.js.map