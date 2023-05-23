import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarplanteamientoProblemaComponent } from './listarplanteamiento-problema.component';

describe('ListarplanteamientoProblemaComponent', () => {
  let component: ListarplanteamientoProblemaComponent;
  let fixture: ComponentFixture<ListarplanteamientoProblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarplanteamientoProblemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarplanteamientoProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
