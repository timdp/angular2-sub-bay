import Sub from '../../models/sub';
import {Observable} from 'rxjs/Observable';

interface ISubsService {
  get (id: number): Promise<Sub>;
  list (): Observable<Sub[]>;
}

export default ISubsService;
