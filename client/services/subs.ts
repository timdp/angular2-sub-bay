import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import ISubsService from './subs/interface';
import Sub from '../../common/models/sub';

@Injectable()
export default class SubsService implements ISubsService {
  private _http: Http;

  constructor (http: Http) {
    this._http = http;
  }

  get (id: number): Promise<Sub> {
    return this._http.get(`/client/api/subs/${id}.json`)
      .map((res: Response) => res.json())
      .toPromise()
      .then(Sub.fromJson);
  }

  list (): Observable<Sub[]> {
    return this._http.get('/client/api/subs.json')
      .map((res: Response) => res.json())
      .map((json: any) => json.subs.map(Sub.fromJson));
  }
}
