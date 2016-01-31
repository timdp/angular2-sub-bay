import {Component} from 'angular2/core';
import SubListCmp from './util/sub-list';

@Component({
  selector: 'sb-menu',
  directives: [SubListCmp],
  template: `
    <h2>Menu</h2>
    <sb-sublist></sb-sublist>
    `
})
export default class MenuCmp {}
