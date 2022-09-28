import { AxiosRequestConfig } from 'axios';
import { UserStatusEnum } from '../../types';
import { BaseApi } from '../baseApi';
export declare class AuthorizationApi extends BaseApi {
    getUserStatus(config?: AxiosRequestConfig): Promise<{
        status: UserStatusEnum | null;
        id: string;
    }>;
}
