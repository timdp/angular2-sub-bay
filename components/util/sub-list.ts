import {Component, Inject} from 'angular2/core';
import SubListItemCmp from './sub-list-item';
import ISubsService from '../../services/subs/interface';
import Sub from '../../models/sub';

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
  private _service: ISubsService;
  private _subs: Sub[];

  constructor (@Inject('SubsService') service: ISubsService) {
    this._service = service;
  }

  ngOnInit (): void {
    this._service.list()
      .subscribe((subs: Sub[]) => this._subs = subs);
  }
}
