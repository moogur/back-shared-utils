import { SortingEnum } from '../types';
export declare class FrontSortingAndPaginationRequestDto {
    readonly sortOrder?: SortingEnum;
    readonly pageSize?: number;
    readonly pageNumber?: number;
}
