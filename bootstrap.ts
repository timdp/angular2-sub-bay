import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import App from './app';
import AuthenticationService from './services/authentication';
import InMemoryAuthenticationService from './services/authentication/in-memory';
import SubsService from './services/subs';
import InMemorySubsService from './services/subs/in-memory';

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(AuthenticationService, {useClass: InMemoryAuthenticationService}),
  provide(SubsService, {useClass: InMemorySubsService})
]).catch((err: any) => console.log(err));
