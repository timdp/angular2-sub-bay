import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import AuthenticationService from '../services/authentication';

@Component({
  selector: 'sb-home',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h2>Home</h2>
    <p>Hi, {{username}}!</p>
    <p><a [routerLink]="['Menu']">View menu</a></p>
    `
})
export default class HomeCmp {
  private _authenticationService: AuthenticationService;

  constructor (authenticationService: AuthenticationService) {
    this._authenticationService = authenticationService;
  }

  get username (): string {
    return this._authenticationService.userInfo
      ? this._authenticationService.userInfo.username
      : 'guest';
  }
}
