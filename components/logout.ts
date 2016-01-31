import {Inject, Component} from 'angular2/core';
import {Router} from 'angular2/router';
import IAuthenticationService from '../services/authentication/interface';

@Component({
  selector: 'sb-logout',
  template: ``
})
export default class LogoutCmp {
  private _router: Router;
  private _authService: IAuthenticationService;

  constructor (router: Router,
               @Inject('AuthenticationService') authService: IAuthenticationService) {
    this._router = router;
    this._authService = authService;
  }

  ngOnInit (): void {
    this._authService.logout()
      .then(() => this._router.parent.navigate(['Login']));
  }
}
