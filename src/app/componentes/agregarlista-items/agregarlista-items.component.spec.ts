import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlistaItemsComponent } from './agregarlista-items.component';

describe('AgregarlistaItemsComponent', () => {
  let component: AgregarlistaItemsComponent;
  let fixture: ComponentFixture<AgregarlistaItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarlistaItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarlistaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
