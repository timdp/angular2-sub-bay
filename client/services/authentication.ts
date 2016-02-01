import {Inject, Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IAuthenticationService from './authentication/interface';

@Injectable()
export default class AuthenticationService implements IAuthenticationService {
  private _http: Http;
  private _apiRoot: string;
  private _token: string;
  private _username: string;

  constructor (http: Http, @Inject('API_ROOT') apiRoot: string) {
    this._http = http;
    this._apiRoot = apiRoot;
  }

  login (username: string, password: string): Promise<any> {
    const body = JSON.stringify({username, password});
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(`${this._apiRoot}/sessions`, body, {headers})
      .map((res: Response) => res.json())
      .toPromise()
      .then((result: any) => {
        this._token = result.token;
        this._username = username;
      });
  }

  logout (): Promise<any> {
    const token = encodeURIComponent(this._token);
    return this._http.delete(`${this._apiRoot}/sessions/current?token=${token}`)
      .toPromise()
      .then(() => this._username = null);
  }

  get authenticated (): boolean {
    return (this._username != null);
  }

  get username (): string {
    return this._username;
  }
}
