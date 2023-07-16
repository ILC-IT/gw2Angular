import { TestBed } from '@angular/core/testing';

import { LegendaryService } from './legendary.service';

describe('LegendaryService', () => {
  let service: LegendaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegendaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
