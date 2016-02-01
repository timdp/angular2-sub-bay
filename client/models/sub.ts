import Price from './price';
import Currency from './currency';

export default class Sub {
  private _id: number;
  private _name: string;
  private _price: Price;

  static fromJson (json: any): Sub {
    return new Sub(json.id, json.name, new Price(json.price, Currency.EUR));
  }

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

  toJson (): any {
    return {
      id: this._id,
      name: this._name,
      price: this._price.amount
    };
  }
}
