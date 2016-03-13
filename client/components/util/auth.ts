import {Router, CanActivate} from 'angular2/router';
import AuthenticationService from '../../services/authentication';
import Context from '../../context';

export default function (constr: Function): any {
  return CanActivate(() => {
    if (Context.injector.get(AuthenticationService).authenticated) {
      return true;
    } else {
      Context.injector.get(Router).navigate(['Login']);
      return false;
    }
  })(constr);
}
