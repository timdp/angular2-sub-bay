import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sb-navigation-authenticated',
  directives: [ROUTER_DIRECTIVES],
  template: `
      <ul>
        <li><a [routerLink]="['Home']">Home</a></li>
        <li><a [routerLink]="['Menu']">Menu</a></li>
        <li><a [routerLink]="['Logout']">Logout</a></li>
      </ul>
      `
})
export default class NavigationAuthenticatedCmp {}
