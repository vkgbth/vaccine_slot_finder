import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindslotComponent } from './findslot.component';

describe('FindslotComponent', () => {
  let component: FindslotComponent;
  let fixture: ComponentFixture<FindslotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindslotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
