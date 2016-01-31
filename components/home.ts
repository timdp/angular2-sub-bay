import {Inject, Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import IAuthenticationService from '../services/authentication/interface';

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
  private _authService: IAuthenticationService;

  constructor (@Inject('AuthenticationService') authService: IAuthenticationService) {
    this._authService = authService;
  }

  get username (): string {
    return this._authService.username;
  }
}
