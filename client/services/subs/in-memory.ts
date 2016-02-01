import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromArray';
import ISubsService from './interface';
import Sub from '../../models/sub';
import Price from '../../models/price';
import Currency from '../../models/currency';

@Injectable()
export default class InMemorySubsService implements ISubsService {
  private _subs: Sub[];

  constructor () {
    this._subs = [];
    for (let id = 1; id <= 10; ++id) {
      const name = `Sub #${id}`;
      const amount = 3 + Math.round(Math.random() * 20) / 10;
      const price = new Price(amount, Currency.EUR);
      this._subs.push(new Sub(id, name, price));
    }
  }

  get (id: number): Promise<Sub> {
    return new Promise((resolve: any, reject: any) => {
      if (id > 0 && id <= this._subs.length) {
        resolve(this._subs[id - 1]);
      } else {
        reject(new Error('Not found'));
      }
    });
  }

  list (): Observable<Sub[]> {
    return Observable.fromArray([this._subs]);
  }
}
