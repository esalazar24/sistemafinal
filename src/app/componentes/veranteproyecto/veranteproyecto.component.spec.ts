import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeranteproyectoComponent } from './veranteproyecto.component';

describe('VeranteproyectoComponent', () => {
  let component: VeranteproyectoComponent;
  let fixture: ComponentFixture<VeranteproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeranteproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeranteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
