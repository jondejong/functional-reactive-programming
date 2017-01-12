import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NameService } from '../name.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {
  name: Subject<any>;

  constructor(private nameService:NameService) {
    this.name = new Subject<any>();

  }

  ngOnInit() {
    this.name
    .map(event => event.target.value)
    .subscribe( value => {
      this.nameService.name = value
    })
  }

}
