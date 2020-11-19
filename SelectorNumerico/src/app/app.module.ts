import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorNumericoComponent } from './components/selector-numerico/selector-numerico.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorNumericoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
