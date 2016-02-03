import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import AuthenticationService from '../services/authentication';

@Component({
  selector: 'sb-footer',
  directives: [ROUTER_DIRECTIVES],
  template: `
      <hr>
      <p>
        <span *ngIf="authenticated">Signed in as {{username}}</span>
        <span *ngIf="!authenticated">Not signed in</span>
      </p>
    `
})
export default class FooterCmp {
  private _authenticationService: AuthenticationService;

  constructor (authenticationService: AuthenticationService) {
    this._authenticationService = authenticationService;
  }

  get authenticated (): boolean {
    return this._authenticationService.authenticated;
  }

  get username (): string {
    return this._authenticationService.userInfo
      ? this._authenticationService.userInfo.username
      : '(unknown)';
  }
}
