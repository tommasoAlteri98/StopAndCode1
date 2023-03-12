import { Component, Input } from '@angular/core';
import { Transazione } from '../transazione';

@Component({
  selector: 'app-transazione-dettagli',
  templateUrl: './transazione-dettagli.component.html',
  styleUrls: ['./transazione-dettagli.component.css']
})
export class TransazioneDettagliComponent {

  @Input()
  transazione? : Transazione;
}
