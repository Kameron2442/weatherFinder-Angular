import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylocsComponent } from './mylocs.component';

describe('MylocsComponent', () => {
  let component: MylocsComponent;
  let fixture: ComponentFixture<MylocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
