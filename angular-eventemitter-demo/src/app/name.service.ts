import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class NameService {

  _name: EventEmitter<string>;

  constructor() {
    this._name = new EventEmitter<string>();
  }

  set name(value:string) {
    this._name.emit(value);
  }

  get dispatch():EventEmitter<string> {
    return this._name;
  }
}
