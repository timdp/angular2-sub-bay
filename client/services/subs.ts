import {Inject, Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import ISubsService from './subs/interface';
import Sub from '../models/sub';

@Injectable()
export default class SubsService implements ISubsService {
  private _http: Http;
  private _apiRoot: string;

  constructor (http: Http, @Inject('API_ROOT') apiRoot: string) {
    this._http = http;
    this._apiRoot = apiRoot;
  }

  get (id: number): Promise<Sub> {
    return this._http.get(`${this._apiRoot}/subs/${id}`)
      .map((res: Response) => res.json())
      .toPromise()
      .then(Sub.fromJson);
  }

  list (): Observable<Sub[]> {
    return this._http.get(`${this._apiRoot}/subs`)
      .map((res: Response) => res.json())
      .map((arr: Array<any>) => arr.map(Sub.fromJson));
  }
}
