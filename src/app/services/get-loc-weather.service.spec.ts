import { TestBed } from '@angular/core/testing';

import { GetLocWeatherService } from './get-loc-weather.service';

describe('GetLocWeatherService', () => {
  let service: GetLocWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLocWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
