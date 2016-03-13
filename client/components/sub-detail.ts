import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import SubPriceCmp from './util/sub-price';
import SubsService from '../services/subs';
import Sub from '../models/sub';
import Auth from './util/auth';

@Auth
@Component({
  selector: 'sb-subdetail',
  directives: [SubPriceCmp, ROUTER_DIRECTIVES],
  template: `
    <h2>{{_sub?.name}}</h2>
    <p *ngIf="_sub == null">Sub not found</p>
    <dl *ngIf="_sub != null">
      <dt>Sub ID:</dt>
      <dd>{{_sub.id}}</dd>
      <dt>Sub name:</dt>
      <dd>{{_sub.name}}</dd>
      <dt>Sub price:</dt>
      <dd><sb-subprice [sub]="_sub"></sb-subprice></dd>
    </dl>
    <p><a [routerLink]="['Menu']">Go back</a></p>
    `
})
export default class SubDetailCmp {
  private _sub: Sub;
  private _routeParams: RouteParams;
  private _service: SubsService;

  constructor (routeParams: RouteParams, service: SubsService) {
    this._routeParams = routeParams;
    this._service = service;
  }

  ngOnInit (): void {
    const id: number = parseInt(this._routeParams.get('id'), 10);
    this._service.get(id).then((sub: Sub) => this._sub = sub);
  }
}
