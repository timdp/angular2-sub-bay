import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import IAuthenticationService from './authentication/interface';

@Injectable()
export default class AuthenticationService implements IAuthenticationService {
  private _http: Http;

  constructor (http: Http) {
    this._http = http;
  }

  login (username: string, password: string): Promise<any> {
    return Promise.reject(new Error('Not implemented'));
  }

  logout (): Promise<any> {
    return Promise.reject(new Error('Not implemented'));
  }

  get authenticated (): boolean {
    return false;
  }

  get username (): string {
    return null;
  }
}
