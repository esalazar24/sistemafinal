import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCorrecionesComponent } from './listar-correciones.component';

describe('ListarCorrecionesComponent', () => {
  let component: ListarCorrecionesComponent;
  let fixture: ComponentFixture<ListarCorrecionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCorrecionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCorrecionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
