import { Component } from '@angular/core';

import { NameService } from '../name.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  
  name:string;

  constructor(private nameService:NameService) {
    this.name = '';
    this.nameService.dispatch.subscribe(value => {
      this.name = value;
    })
  }


}
