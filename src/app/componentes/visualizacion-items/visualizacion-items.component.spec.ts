import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionItemsComponent } from './visualizacion-items.component';

describe('VisualizacionItemsComponent', () => {
  let component: VisualizacionItemsComponent;
  let fixture: ComponentFixture<VisualizacionItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizacionItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizacionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
