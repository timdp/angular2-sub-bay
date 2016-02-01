import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import AuthenticationService from '../services/authentication';

@Component({
  selector: 'sb-logout',
  template: ``
})
export default class LogoutCmp {
  private _router: Router;
  private _authService: AuthenticationService;

  constructor (router: Router, authService: AuthenticationService) {
    this._router = router;
    this._authService = authService;
  }

  ngOnInit (): void {
    this._authService.logout()
      .then(() => this._router.parent.navigate(['Login']));
  }
}
