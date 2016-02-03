import {Inject, Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IAuthenticationService from './authentication/interface';

const LOCAL_STORAGE_KEY: string = 'accessToken';

@Injectable()
export default class AuthenticationService implements IAuthenticationService {
  private _http: Http;
  private _apiRoot: string;
  private _accessToken: string;
  private _userInfo: any;

  constructor (http: Http, @Inject('API_ROOT') apiRoot: string) {
    this._http = http;
    this._apiRoot = apiRoot;
    this._accessToken = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    this._updateUserInfo();
  }

  get authenticated (): boolean {
    return (this._accessToken != null);
  }

  get userInfo (): any {
    return this._userInfo;
  }

  logIn (token: string): Promise<any> {
    this._accessToken = token;
    window.localStorage.setItem(LOCAL_STORAGE_KEY, token);
    return this._updateUserInfo();
  }

  logOut (): Promise<any> {
    const headers: Headers = new Headers();
    headers.append('Authorization', this._accessToken);
    return this._http.delete(`${this._apiRoot}/session`, {headers})
      .toPromise()
      .then(() => {
        this._accessToken = null;
        window.localStorage.removeItem(LOCAL_STORAGE_KEY);
        this._userInfo = null;
      });
  }

  private _updateUserInfo (): Promise<any> {
    if (this._accessToken == null) {
      this._userInfo = null;
      return Promise.resolve();
    }
    const headers: Headers = new Headers();
    headers.append('Authorization', this._accessToken);
    return this._http.get(`${this._apiRoot}/users/me`, {headers})
      .toPromise()
      .then((userInfo: any) => this._userInfo = userInfo);
  }
}
