export default class Currency {
  private static _EUR: Currency = new Currency('EUR');
  static get EUR (): Currency {
    return this._EUR;
  }

  private static _USD: Currency = new Currency('USD');
  static get USD (): Currency {
    return this._USD;
  }

  private _code: string;

  constructor (code: string) {
    this._code = code;
  }

  toString (): string {
    return this._code;
  }
}
