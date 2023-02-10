import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddSentenceComponent } from './add-sentence/add-sentence.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AddSentenceComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
