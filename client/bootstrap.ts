import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS, BrowserXhr} from 'angular2/http';
import BrowserXhrWithCredentials from './services/browser-xhr-with-credentials';
import {ROUTER_PROVIDERS} from 'angular2/router';
import App from './app';
import AuthenticationService from './services/authentication';
import SubsService from './services/subs';

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide('API_ROOT', {useValue: 'http://localhost:3000/api'}),
  provide(AuthenticationService, {useClass: AuthenticationService}),
  provide(SubsService, {useClass: SubsService}),
  provide(BrowserXhr, {useClass: BrowserXhrWithCredentials})
]).catch((err: any) => console.log(err));
