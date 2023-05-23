import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezaNavbarComponent } from './cabeza-navbar.component';

describe('CabezaNavbarComponent', () => {
  let component: CabezaNavbarComponent;
  let fixture: ComponentFixture<CabezaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabezaNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabezaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
