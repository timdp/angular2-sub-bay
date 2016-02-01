import {Observable} from 'rxjs/Observable';
import Sub from '../../models/sub';

interface ISubsService {
  get (id: number): Promise<Sub>;
  list (): Observable<Sub[]>;
}

export default ISubsService;
