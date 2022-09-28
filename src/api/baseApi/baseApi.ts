import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { ApiException } from '@src/exceptions';
import { ResponseData } from '@types';

export abstract class BaseApi {
  private readonly axiosInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}) {
    this.axiosInstance = axios.create(config);
  }

  public axios(): AxiosInstance {
    return this.axiosInstance;
  }

  public setBaseUrl(url: string) {
    this.axiosInstance.defaults.baseURL = url;
  }

  public setHeaders(headers: { [key: string]: string }) {
    this.axiosInstance.defaults.headers.common = headers;
  }

  protected request<T>(options: AxiosRequestConfig): Promise<ResponseData<T>> {
    return this.axiosInstance.request(options).then(
      (response) => response.data,
      (error) => {
        throw new ApiException({
          code: error?.code,
          status: error?.response?.status,
          statusText: error?.response?.statusText,
          data: error?.response?.data,
        });
      },
    );
  }
}
