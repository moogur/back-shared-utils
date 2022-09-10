import { SortingEnum } from '../types';
export declare class BaseRequestSortingAndPaginationDto {
    readonly sortOrder?: SortingEnum;
    readonly pageSize?: number;
    readonly pageNumber?: number;
}
