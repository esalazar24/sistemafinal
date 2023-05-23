import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeItemsComponent } from './registro-de-items.component';

describe('RegistroDeItemsComponent', () => {
  let component: RegistroDeItemsComponent;
  let fixture: ComponentFixture<RegistroDeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDeItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
