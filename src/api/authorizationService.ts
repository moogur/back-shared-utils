import { AuthorizationApi } from './authorizationApi';
import { AUTHORIZATION_BASEURL } from './baseUrls';

export const authorizationService = new AuthorizationApi({
  baseURL: AUTHORIZATION_BASEURL,
});
