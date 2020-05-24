import { TestBed } from '@angular/core/testing';

import { SavedLocsService } from './saved-locs.service';

describe('SavedLocsService', () => {
  let service: SavedLocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedLocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
