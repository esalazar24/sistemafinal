import { TestBed } from '@angular/core/testing';

import { TituloTentativoService } from './titulo-tentativo.service';

describe('TituloTentativoService', () => {
  let service: TituloTentativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TituloTentativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
