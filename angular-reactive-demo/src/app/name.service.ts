import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NameService {

  _name: Subject<string>;

  constructor() {
    this._name = new Subject<string>();
  }

  set name(value:string) {
    this._name.next(value);
  }

  get dispatch():Observable<string> {
    return this._name.asObservable();
  }
}
