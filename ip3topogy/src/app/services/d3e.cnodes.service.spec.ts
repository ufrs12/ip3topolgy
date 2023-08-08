import { TestBed } from '@angular/core/testing';

import { D3eCnodesService } from './d3e.cnodes.service';

describe('D3eCnodesService', () => {
  let service: D3eCnodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D3eCnodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
