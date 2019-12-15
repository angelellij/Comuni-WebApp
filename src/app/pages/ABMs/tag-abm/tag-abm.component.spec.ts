import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagAbmComponent } from './tag-abm.component';

describe('TagAbmComponent', () => {
  let component: TagAbmComponent;
  let fixture: ComponentFixture<TagAbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagAbmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
