import { TestBed } from '@angular/core/testing';

import { PcFilterService } from './pc-filter.service';

describe('PcFilterService', () => {
  let service: PcFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
