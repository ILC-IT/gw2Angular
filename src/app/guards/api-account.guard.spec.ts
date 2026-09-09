import { TestBed } from '@angular/core/testing';

import { ApiAccountGuard } from './api-account.guard';

describe('ApiAccountGuard', () => {
  let guard: ApiAccountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApiAccountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
