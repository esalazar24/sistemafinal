import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarObjectivoGeneralComponent } from './listar-objectivo-general.component';

describe('ListarObjectivoGeneralComponent', () => {
  let component: ListarObjectivoGeneralComponent;
  let fixture: ComponentFixture<ListarObjectivoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarObjectivoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarObjectivoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
