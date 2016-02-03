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
  private _authenticationService: AuthenticationService;

  constructor (authenticationService: AuthenticationService) {
    this._authenticationService = authenticationService;
  }

  get authenticated (): boolean {
    return this._authenticationService.authenticated;
  }
}
