import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NameService } from '../name.service';

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

  constructor(private nameService: NameService) {
    this.handler = new EventEmitter<string>();
  }

  onNameChange(event) {
    this.handler.emit(event.target.value);
  }
}
