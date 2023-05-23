import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaranteproyectoComponent } from './agregaranteproyecto.component';

describe('AgregaranteproyectoComponent', () => {
  let component: AgregaranteproyectoComponent;
  let fixture: ComponentFixture<AgregaranteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaranteproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregaranteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
