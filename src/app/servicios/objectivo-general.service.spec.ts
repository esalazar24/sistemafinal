import { TestBed } from '@angular/core/testing';

import { ObjectivoGeneralService } from './objectivo-general.service';

describe('ObjectivoGeneralService', () => {
  let service: ObjectivoGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectivoGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
