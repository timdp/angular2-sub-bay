import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import AuthenticationService from '../services/authentication';

@Component({
  selector: 'sb-logout',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h2>Logging Out</h2>
    <p>You are now being logged out.</p>
    `
})
export default class LogoutCmp {
  constructor (authenticationService: AuthenticationService, router: Router) {
    authenticationService.logOut()
      .then(() => router.navigate(['Home']))
      .catch((err: any) => window.alert(`Error: ${err.message}`));
  }
}
