import {Component, Input} from 'angular2/core';
import SubLinkCmp from './sub-link';
import SubPriceCmp from './sub-price';
import Sub from '../../models/sub';

@Component({
  selector: 'sb-sublistitem',
  directives: [SubLinkCmp, SubPriceCmp],
  template: `
    <li><sb-sublink [sub]="sub"></sb-sublink>
      (<sb-subprice [sub]="sub"></sb-subprice>)</li>
    `
})
export default class SubListItemCmp {
  @Input() sub: Sub;
}
