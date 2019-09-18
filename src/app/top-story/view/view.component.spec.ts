import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoryViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: TopStoryViewComponent;
  let fixture: ComponentFixture<TopStoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
