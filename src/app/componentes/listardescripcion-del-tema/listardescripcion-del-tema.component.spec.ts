import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListardescripcionDelTemaComponent } from './listardescripcion-del-tema.component';

describe('ListardescripcionDelTemaComponent', () => {
  let component: ListardescripcionDelTemaComponent;
  let fixture: ComponentFixture<ListardescripcionDelTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListardescripcionDelTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListardescripcionDelTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
