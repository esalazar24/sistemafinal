import { TestBed } from '@angular/core/testing';

import { DescripcionDelTemaService } from './descripcion-del-tema.service';

describe('DescripcionDelTemaService', () => {
  let service: DescripcionDelTemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescripcionDelTemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
