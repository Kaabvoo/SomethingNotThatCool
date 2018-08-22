import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ShowMessComponent } from './show-mess/show-mess.component';
import { combineReducers } from "./_ngrx/reductor";
import { SendInfo } from "./_ngrx/effects";

import { HttpClientModule } from "@angular/common/http";
import { ShowClientComponent } from './show-client/show-client.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowMessComponent,
    ShowClientComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(combineReducers),
    EffectsModule.forRoot([SendInfo]),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
