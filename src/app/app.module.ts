import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Baitap4Module} from './baitap4/baitap4.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,Baitap4Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
