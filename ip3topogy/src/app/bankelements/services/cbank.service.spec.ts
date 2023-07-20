import { TestBed } from '@angular/core/testing';

import { CbankService } from './cbank.service';

describe('CbankService', () => {
  let service: CbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
