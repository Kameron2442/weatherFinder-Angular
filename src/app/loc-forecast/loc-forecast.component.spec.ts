import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocForecastComponent } from './loc-forecast.component';

describe('LocForecastComponent', () => {
  let component: LocForecastComponent;
  let fixture: ComponentFixture<LocForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
