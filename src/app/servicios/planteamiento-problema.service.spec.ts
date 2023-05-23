import { TestBed } from '@angular/core/testing';

import { PlanteamientoProblemaService } from './planteamiento-problema.service';

describe('PlanteamientoProblemaService', () => {
  let service: PlanteamientoProblemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanteamientoProblemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
