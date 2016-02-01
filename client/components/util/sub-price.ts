import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import Sub from '../../../common/models/sub';

@Component({
  selector: 'sb-subprice',
  directives: [ROUTER_DIRECTIVES],
  template: `
    {{sub.price.amount|currency:sub.price.currency.toString():true:'.2'}}
    `
})
export default class SubPriceCmp {
  @Input() sub: Sub;
}
