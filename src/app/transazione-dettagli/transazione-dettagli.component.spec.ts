import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransazioneDettagliComponent } from './transazione-dettagli.component';

describe('TransazioneDettagliComponent', () => {
  let component: TransazioneDettagliComponent;
  let fixture: ComponentFixture<TransazioneDettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransazioneDettagliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransazioneDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
