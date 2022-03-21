import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFeedLeftComponent } from './main-feed-left.component';

describe('MainFeedLeftComponent', () => {
  let component: MainFeedLeftComponent;
  let fixture: ComponentFixture<MainFeedLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFeedLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFeedLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
