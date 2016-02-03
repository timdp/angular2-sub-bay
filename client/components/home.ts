import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'sb-home',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h2>Home</h2>
    <p>Hi!</p>
    <p><a [routerLink]="['Menu']">View menu</a></p>
    `
})
export default class HomeCmp {}
