import { TestBed } from '@angular/core/testing';

import { IdgenService } from './idgen.service';

describe('IdgenService', () => {
  let service: IdgenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdgenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
