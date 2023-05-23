import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanteamientoProblemaComponent } from './planteamiento-problema.component';

describe('PlanteamientoProblemaComponent', () => {
  let component: PlanteamientoProblemaComponent;
  let fixture: ComponentFixture<PlanteamientoProblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanteamientoProblemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanteamientoProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
