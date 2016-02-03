import {Component, Inject} from 'angular2/core';

@Component({
  selector: 'sb-login',
  template: `
    <h2>Redirecting</h2>
    <p>You are being transferred to Google for authentication.</p>
    `
})
export default class LoginCmp {
  constructor (@Inject('API_ROOT') apiRoot: string) {
    window.location.href = `${apiRoot}/auth/google`;
  }
}
