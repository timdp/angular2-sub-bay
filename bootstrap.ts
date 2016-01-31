import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import App from './app';
import InMemorySubsService from './services/subs/in-memory';
import InMemoryAuthenticationService from './services/authentication/in-memory';

bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide('SubsService', {useClass: InMemorySubsService}),
  provide('AuthenticationService', {useClass: InMemoryAuthenticationService})
]).catch((err: any) => console.log(err));
