import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocItemComponent } from './loc-item.component';

describe('LocItemComponent', () => {
  let component: LocItemComponent;
  let fixture: ComponentFixture<LocItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
