import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sb-navigation-unauthenticated',
  directives: [ROUTER_DIRECTIVES],
  template: `
      <ul>
        <li><a [routerLink]="['Login']">Login</a></li>
      </ul>
      `
})
export default class NavigationUnauthenticatedCmp {}
