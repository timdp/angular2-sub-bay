import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import IAuthenticationService from './interface';

@Injectable()
export default class DefaultAuthenticationService implements IAuthenticationService {
  private _http: Http;

  constructor (@Inject(Http) http: Http) {
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
