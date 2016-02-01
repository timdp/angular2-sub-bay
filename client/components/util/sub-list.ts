import {Component} from 'angular2/core';
import SubListItemCmp from './sub-list-item';
import SubsService from '../../services/subs';
import Sub from '../../../common/models/sub';

@Component({
  selector: 'sb-sublist',
  directives: [SubListItemCmp],
  template: `
    <ul>
      <sb-sublistitem *ngFor="#sub of _subs" [sub]="sub"></sb-sublistitem>
    </ul>
    `
})
export default class SubListCmp {
  private _service: SubsService;
  private _subs: Sub[];

  constructor (service: SubsService) {
    this._service = service;
  }

  ngOnInit (): void {
    this._service.list()
      .subscribe((subs: Sub[]) => this._subs = subs);
  }
}
