import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddSentenceComponent } from './add-sentence/add-sentence.component';
import { DisplaySentenceComponent } from './display-sentence/display-sentence.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'admin', component: AppComponent}
    ])
  ],
  declarations: [
    AppComponent,
    AddSentenceComponent,
    DisplaySentenceComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Import reactiveFormModule here for the form to work
// https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
