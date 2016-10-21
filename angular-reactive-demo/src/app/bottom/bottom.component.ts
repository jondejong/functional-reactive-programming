import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NameService } from '../name.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {
  name: string;

  constructor(private nameService:NameService) {
    this.name = '';
  }

  onNameChange() {
    this.nameService.name = this.name;
  }
}
