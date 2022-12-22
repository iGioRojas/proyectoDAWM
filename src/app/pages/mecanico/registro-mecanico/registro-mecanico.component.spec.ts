import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMecanicoComponent } from './registro-mecanico.component';

describe('RegistroMecanicoComponent', () => {
  let component: RegistroMecanicoComponent;
  let fixture: ComponentFixture<RegistroMecanicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMecanicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMecanicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
