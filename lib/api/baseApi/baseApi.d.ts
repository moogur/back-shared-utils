import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ResponseData } from '../../types';
export declare abstract class BaseApi {
    private readonly axiosInstance;
    constructor(config?: AxiosRequestConfig);
    axios(): AxiosInstance;
    setBaseUrl(url: string): void;
    setHeaders(headers: {
        [key: string]: string;
    }): void;
    protected request<T>(options: AxiosRequestConfig): Promise<ResponseData<T>>;
}
