import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarTallerComponent } from './solicitar-taller.component';

describe('SolicitarTallerComponent', () => {
  let component: SolicitarTallerComponent;
  let fixture: ComponentFixture<SolicitarTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarTallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
