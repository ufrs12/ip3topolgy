import { TestBed } from '@angular/core/testing';

import { D3eService } from './d3e.service';

describe('D3eService', () => {
  let service: D3eService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D3eService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
