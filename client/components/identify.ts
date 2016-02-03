import {Component} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import AuthenticationService from '../services/authentication';

@Component({
  selector: 'sb-identify',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h2>Please Wait</h2>
    <p>Completing login process.</p>
    `
})
export default class IdentifyCmp {
  constructor (params: RouteParams,
               authenticationService: AuthenticationService,
               router: Router) {
    authenticationService.logIn(params.get('id'))
      .then(() => router.navigate(['Home']))
      .catch((err: any) => alert(`Error`));
  }
}
