export class Person {
  _id?: number;
  _name: string;
  _age?: string;
  _cnic: number;
  constructor(name: string, cnic: number) {
    this._name = name;
    this._cnic = cnic;
  }
}
