import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import AuthenticationService from '../services/authentication';

@Component({
  selector: 'sb-login',
  template: `
    <h2>Login</h2>
    <form (submit)="login($event, username.value, password.value)">
    <p>Username: <input type="text" #username></p>
    <p>Password: <input type="password" #password></p>
    <p><button type="submit">Log In</button></p>
    </form>
    `
})
export default class LoginCmp {
  private _router: Router;
  private _authService: AuthenticationService;

  constructor (router: Router, authService: AuthenticationService) {
    this._router = router;
    this._authService = authService;
  }

  login (event: any, username: string, password: string): void {
    event.preventDefault();
    this._authService.login(username, password)
      .then(() => this._router.parent.navigate(['Home']))
      .catch((err: Error) => alert('Login failed'));
  }
}
