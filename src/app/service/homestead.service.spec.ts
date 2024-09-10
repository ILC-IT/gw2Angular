import { TestBed } from '@angular/core/testing';

import { HomesteadService } from './homestead.service';

describe('HomesteadService', () => {
  let service: HomesteadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomesteadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
