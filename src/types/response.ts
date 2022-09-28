import { AxiosResponse } from 'axios';

export type ResponseData<T> = AxiosResponse<T>['data'];
