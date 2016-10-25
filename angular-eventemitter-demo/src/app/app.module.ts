import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { EventInputComponent } from './event-input/event-input.component';
import { NameService } from './name.service';

@NgModule({
  declarations: [
    AppComponent, TopComponent, BottomComponent, EventInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
