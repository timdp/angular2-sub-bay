import {Inject, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IAuthenticationService from './authentication/interface';

const LOCAL_STORAGE_KEY: string = 'userId';

@Injectable()
export default class AuthenticationService implements IAuthenticationService {
  private _http: Http;
  private _apiRoot: string;
  private _userId: string;
  private _userInfo: any;

  constructor (http: Http, @Inject('API_ROOT') apiRoot: string) {
    this._http = http;
    this._apiRoot = apiRoot;
    this._userId = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    this._updateUserInfo();
  }

  get authenticated (): boolean {
    return (this._userId != null);
  }

  get userInfo (): any {
    return this._userInfo;
  }

  logIn (id: string): Promise<any> {
    this._userId = id;
    window.localStorage.setItem(LOCAL_STORAGE_KEY, id);
    return this._updateUserInfo();
  }

  logOut (): Promise<any> {
    return this._http.delete(`${this._apiRoot}/session`)
      .toPromise()
      .then(() => {
        window.localStorage.removeItem(LOCAL_STORAGE_KEY);
        this._userId = null;
        this._userInfo = null;
      });
  }

  private _updateUserInfo (): Promise<any> {
    if (this._userId == null) {
      this._userInfo = null;
      return Promise.resolve();
    }
    return this._http.get(`${this._apiRoot}/users/${this._userId}`)
      .map((res: Response) => res.json())
      .toPromise()
      .then((userInfo: any) => this._userInfo = userInfo);
  }
}
