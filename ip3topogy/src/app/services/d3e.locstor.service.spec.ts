import { TestBed } from '@angular/core/testing';

import { D3eLocstorService } from './d3e.locstor.service';

describe('D3eLocstorService', () => {
  let service: D3eLocstorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D3eLocstorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
