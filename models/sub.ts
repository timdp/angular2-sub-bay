import Price from './price';

export default class Sub {
  private _id: number;
  private _name: string;
  private _price: Price;

  constructor (id: number, name: string, price: Price) {
    this._id = id;
    this._name = name;
    this._price = price;
  }

  get id (): number {
    return this._id;
  }

  get name (): string {
    return this._name;
  }

  get price (): Price {
    return this._price;
  }

  toString (): string {
    return this.name;
  }
}
