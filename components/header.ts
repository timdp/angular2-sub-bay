import {Inject, Component} from 'angular2/core';
import NavigationCmp from './util/navigation';
import IAuthenticationService from '../services/authentication/interface';

@Component({
  selector: 'sb-header',
  directives: [NavigationCmp],
  template: `
      <h1>SubBay</h1>
      <hr>
      <sb-navigation [authenticated]="authenticated"></sb-navigation>
      <hr>
    `
})
export default class HeaderCmp {
  private _authService: IAuthenticationService;

  constructor (@Inject('AuthenticationService') authService: IAuthenticationService) {
    this._authService = authService;
  }

  get authenticated (): boolean {
    return this._authService.authenticated;
  }
}
