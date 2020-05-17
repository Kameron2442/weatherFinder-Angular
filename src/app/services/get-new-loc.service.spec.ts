import { TestBed } from '@angular/core/testing';

import { GetNewLocService } from './get-new-loc.service';

describe('GetNewLocService', () => {
  let service: GetNewLocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNewLocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
