
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexlayoutModule } from '@angular/flex-layout';

import 'hammerjs';

@NgModule({


imports; [

    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
],



})
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
