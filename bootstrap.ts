import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import App from './app';
import AuthenticationService from './services/authentication';
import SubsService from './services/subs';

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(AuthenticationService, {useClass: AuthenticationService}),
  provide(SubsService, {useClass: SubsService})
]).catch((err: any) => console.log(err));
