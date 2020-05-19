import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocQuickViewComponent } from './loc-quick-view.component';

describe('LocQuickViewComponent', () => {
  let component: LocQuickViewComponent;
  let fixture: ComponentFixture<LocQuickViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocQuickViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
