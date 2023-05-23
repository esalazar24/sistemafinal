import { TestBed } from '@angular/core/testing';

import { CorrecionesService } from './correciones.service';

describe('CorrecionesService', () => {
  let service: CorrecionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrecionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
