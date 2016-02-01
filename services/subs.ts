import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import ISubsService from './subs/interface';
import Sub from '../models/sub';

@Injectable()
export default class SubsService implements ISubsService {
  private _http: Http;

  constructor (http: Http) {
    this._http = http;
  }

  get (id: number): Promise<Sub> {
    return new Promise((resolve: any, reject: any) => {
      reject(new Error('Not implemented'));
    });
  }

  list (): Observable<Sub[]> {
    return Observable.from([]);
  }
}
