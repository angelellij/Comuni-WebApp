import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerNoticiasPageComponent } from './inner-noticias-page.component';

describe('InnerNoticiasPageComponent', () => {
  let component: InnerNoticiasPageComponent;
  let fixture: ComponentFixture<InnerNoticiasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerNoticiasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerNoticiasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
