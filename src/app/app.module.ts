import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRouting} from './app.routing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
