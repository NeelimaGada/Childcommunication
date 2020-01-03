import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { SearchPipe } from './search.pipe';
import {HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    SearchPipe,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
