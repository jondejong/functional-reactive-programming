import { Component } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {

  constructor(private nameService:NameService) {}

  onNameChange(name) {
    this.nameService.name = name;
  }
}
