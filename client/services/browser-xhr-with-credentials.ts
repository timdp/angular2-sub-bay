import {BrowserXhr} from 'angular2/http';

export default class BrowserXhrWithCredentials extends BrowserXhr {
  build (): any {
    const xhr: any = super.build();
    xhr.withCredentials = true;
    return xhr;
  }
}
