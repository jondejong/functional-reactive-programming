import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NameService } from '../name.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'event-input',
  templateUrl: './event-input.component.html',
  styleUrls: ['./event-input.component.scss']
})
export class EventInputComponent {

  @Input()
  placeHolder: String;

  @Output()
  handler: EventEmitter<string>;

  name: Subject<any>;

  constructor(private nameService: NameService) {
    this.handler = new EventEmitter<string>();
    this.name = new Subject<any>();
    this.name
    .map(event => event.target.value)
    .subscribe( value => {
      this.nameService.name = value
    })
  }
}
