import {Component} from 'angular2/core';
import NavigationCmp from './util/navigation';
import AuthenticationService from '../services/authentication';

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
  private _authService: AuthenticationService;

  constructor (authService: AuthenticationService) {
    this._authService = authService;
  }

  get authenticated (): boolean {
    return this._authService.authenticated;
  }
}
