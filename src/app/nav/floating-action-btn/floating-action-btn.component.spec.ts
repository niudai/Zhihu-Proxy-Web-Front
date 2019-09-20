import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingActionBtnComponent } from './floating-action-btn.component';

describe('FloatingActionBtnComponent', () => {
  let component: FloatingActionBtnComponent;
  let fixture: ComponentFixture<FloatingActionBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingActionBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingActionBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
