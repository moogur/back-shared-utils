import { AxiosRequestConfig } from 'axios';

import { UserStatusEnum } from '@types';

import { BaseApi } from '../baseApi';

export class AuthorizationApi extends BaseApi {
  public getUserStatus(config?: AxiosRequestConfig) {
    return this.request<{ status: UserStatusEnum | null; id: string }>({
      method: 'get',
      url: '/service/getUserStatus',
      ...config,
    });
  }
}
