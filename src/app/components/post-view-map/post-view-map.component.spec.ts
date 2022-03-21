import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewMapComponent } from './post-view-map.component';

describe('PostViewMapComponent', () => {
  let component: PostViewMapComponent;
  let fixture: ComponentFixture<PostViewMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostViewMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostViewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
