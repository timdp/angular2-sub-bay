import {Inject, Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import IAuthenticationService from './services/authentication/interface';

@Directive({
  selector: 'router-outlet'
})
export default class LoggedInRouterOutlet extends RouterOutlet {
  private _publicRoutes: any;
  private _parentRouter0: Router;
  private _authService: IAuthenticationService;

  constructor(elementRef: ElementRef, loader: DynamicComponentLoader,
              parentRouter: Router, @Attribute('name') nameAttr: string,
              @Inject('AuthenticationService') authService: IAuthenticationService) {
    super(elementRef, loader, parentRouter, nameAttr);
    this._parentRouter0 = parentRouter;
    this._authService = authService;
    this._publicRoutes = {
      '/login': true,
      '/signup': true
    };
  }

  activate (instruction: ComponentInstruction): Promise<any> {
    const url: string = this._parentRouter0.lastNavigationAttempt;
    if (!this._publicRoutes[url] && !this._authService.authenticated) {
      this._parentRouter0.navigate(['Login']);
    }
    return super.activate(instruction);
  }
}
