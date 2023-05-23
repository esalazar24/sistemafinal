import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivoGeneralComponent } from './objectivo-general.component';

describe('ObjectivoGeneralComponent', () => {
  let component: ObjectivoGeneralComponent;
  let fixture: ComponentFixture<ObjectivoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectivoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectivoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
