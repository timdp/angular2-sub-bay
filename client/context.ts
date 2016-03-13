import {Injector} from 'angular2/core';

export default class Context {
  private static _injector: Injector;

  static get injector (): Injector {
    return this._injector;
  }

  static set injector (value: Injector) {
    this._injector = value;
  }
}
