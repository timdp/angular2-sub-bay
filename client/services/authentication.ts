import {Injectable} from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IAuthenticationService from './authentication/interface';

const buildQueryString = (obj: any) => {
  const params = new URLSearchParams();
  for (const key of Object.keys(obj)) {
    params.set(key, obj[key]);
  }
  return params.toString();
};

const buildUri = (rsrc: string, obj: any) => {
  return `/client/api/${rsrc}.json?` + buildQueryString(obj);
};

@Injectable()
export default class AuthenticationService implements IAuthenticationService {
  private _http: Http;
  private _sessionId: string;
  private _username: string;

  constructor (http: Http) {
    this._http = http;
  }

  login (username: string, password: string): Promise<any> {
    // return this._http.post('/api/sessions', JSON.stringify({username, password}))
    return this._getJson('login', {username, password})
      .then((result: any) => {
        this._sessionId = result.session;
        this._username = username;
      });
  }

  logout (): Promise<any> {
    // return this._http.delete('/api/sessions/' + this._sessionId)
    return this._getJson('logout', {session: this._sessionId})
      .then(() => this._username = null);
  }

  get authenticated (): boolean {
    return (this._username != null);
  }

  get username (): string {
    return this._username;
  }

  private _getJson (rsrc: string, obj: any): Promise<any> {
    return this._http.get(buildUri(rsrc, obj))
      .map((res: Response) => res.json())
      .toPromise();
  }
}
