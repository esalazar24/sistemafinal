import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTituloTentativoComponent } from './listar-titulo-tentativo.component';

describe('ListarTituloTentativoComponent', () => {
  let component: ListarTituloTentativoComponent;
  let fixture: ComponentFixture<ListarTituloTentativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTituloTentativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTituloTentativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
