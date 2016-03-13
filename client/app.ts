import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import HomeCmp from './components/home';
import LoginCmp from './components/login';
import LogoutCmp from './components/logout';
import IdentifyCmp from './components/identify';
import MenuCmp from './components/menu';
import HeaderCmp from './components/header';
import FooterCmp from './components/footer';
import SubDetailCmp from './components/sub-detail';

@Component({
  selector: 'sb-app',
  directives: [ROUTER_DIRECTIVES, HeaderCmp, FooterCmp],
  template: `
    <sb-header></sb-header>
    <router-outlet></router-outlet>
    <sb-footer></sb-footer>
    `
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeCmp, useAsDefault: true},
  {path: '/login', name: 'Login', component: LoginCmp},
  {path: '/logout', name: 'Logout', component: LogoutCmp},
  {path: '/identify', name: 'Identify', component: IdentifyCmp},
  {path: '/subs', name: 'Menu', component: MenuCmp},
  {path: '/subs/:id', name: 'SubDetail', component: SubDetailCmp}
])
export default class App {}
