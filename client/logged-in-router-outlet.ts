import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import AuthenticationService from './services/authentication';

@Directive({
  selector: 'router-outlet'
})
export default class LoggedInRouterOutlet extends RouterOutlet {
  private _publicRoutes: any;
  private _parentRouter0: Router;
  private _authenticationService: AuthenticationService;

  constructor(elementRef: ElementRef, loader: DynamicComponentLoader,
              parentRouter: Router, @Attribute('name') nameAttr: string,
              authenticationService: AuthenticationService) {
    super(elementRef, loader, parentRouter, nameAttr);
    this._parentRouter0 = parentRouter;
    this._authenticationService = authenticationService;
    this._publicRoutes = {
      '/login': true,
      '/identify': true
    };
  }

  activate (instruction: ComponentInstruction): Promise<any> {
    let url: string = this._parentRouter0.lastNavigationAttempt;
    const pos: number = url.indexOf('?');
    if (pos >= 0) {
      url = url.substr(0, pos);
    }
    if (!this._publicRoutes[url] && !this._authenticationService.authenticated) {
      this._parentRouter0.navigate(['Login']);
    }
    return super.activate(instruction);
  }
}
