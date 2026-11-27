import { TestBed } from '@angular/core/testing';

import { Gw2DataService } from './gw2-data.service';

describe('Gw2DataService', () => {
  let service: Gw2DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Gw2DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
