import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionDelTemaComponent } from './descripcion-del-tema.component';

describe('DescripcionDelTemaComponent', () => {
  let component: DescripcionDelTemaComponent;
  let fixture: ComponentFixture<DescripcionDelTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionDelTemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionDelTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
