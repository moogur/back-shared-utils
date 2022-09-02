import { PaginationResponseDto } from './pagination.response.dto';
export declare class PaginatedResponseDto<T> {
    readonly list: T[];
    readonly pagination: PaginationResponseDto;
}
