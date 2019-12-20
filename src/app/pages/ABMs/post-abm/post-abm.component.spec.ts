import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAbmComponent } from './post-abm.component';

describe('PostAbmComponent', () => {
  let component: PostAbmComponent;
  let fixture: ComponentFixture<PostAbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
