import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransazioniListComponent } from './transazioni-list/transazioni-list.component';
import { TransazioneDettagliComponent } from './transazione-dettagli/transazione-dettagli.component';

@NgModule({
  declarations: [
    AppComponent,
    TransazioniListComponent,
    TransazioneDettagliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
