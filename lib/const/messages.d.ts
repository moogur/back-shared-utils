export declare const errorStatusMessages: {
    readonly 401: "Unauthorized";
    readonly 500: "Internal server error";
    readonly 422: "Bad request";
    readonly 400: "Bad request";
    readonly 404: "Not Found";
};
export declare const customErrorStatusMessages: {
    readonly 400: "Payload should not be empty";
};
export declare const customErrorMessages: {
    readonly NOT_VALID_ISO_DATE: "The date has a format that does not correspond to iso";
    readonly MIN_DATE: "The date is less than the minimum date of 1910-01-01";
    readonly MAX_DATE: "The date is greater than the maximum date of 2035-01-01";
    readonly EMPTY_DATA_FOR_UPDATING_ERROR: "No data has been transmitted for updating";
};
