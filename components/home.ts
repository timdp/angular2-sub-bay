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
  private _authService: AuthenticationService;

  constructor (authService: AuthenticationService) {
    this._authService = authService;
  }

  get username (): string {
    return this._authService.username;
  }
}
