import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubjectBasisComponent } from './subject-basis/subject-basis.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectBasisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
