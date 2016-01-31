import {Injectable} from 'angular2/core';
import IAuthenticationService from './interface';

@Injectable()
export default class InMemoryAuthenticationService implements IAuthenticationService {
  private _username: string;

  constructor () {
    this._username = null;
  }

  login (username: string, password: string): Promise<any> {
    this._username = username;
    return Promise.resolve();
  }

  logout (): Promise<any> {
    this._username = null;
    return Promise.resolve();
  }

  get authenticated (): boolean {
    return (this._username != null);
  }

  get username (): string {
    return this._username;
  }
}
