import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import Sub from '../../../common/models/sub';

@Component({
  selector: 'sb-sublink',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <a [routerLink]="['SubDetail', {id: sub.id}]">{{sub.name}}</a>
    `
})
export default class SubLinkCmp {
  @Input() sub: Sub;
}
