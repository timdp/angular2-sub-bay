import {Component, Input} from 'angular2/core';
import NavigationAuthenticatedCmp from './navigation-authenticated';
import NavigationUnauthenticatedCmp from './navigation-unauthenticated';

@Component({
  selector: 'sb-navigation',
  directives: [NavigationUnauthenticatedCmp, NavigationAuthenticatedCmp],
  template: `
      <nav>
        <sb-navigation-authenticated *ngIf="authenticated"></sb-navigation-authenticated>
        <sb-navigation-unauthenticated *ngIf="!authenticated"></sb-navigation-unauthenticated>
      </nav>
      `
})
export default class NavigationCmp {
  @Input() authenticated: boolean;
}
