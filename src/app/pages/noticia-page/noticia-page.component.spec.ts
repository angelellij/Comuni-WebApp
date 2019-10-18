import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaPageComponent } from './noticia-page.component';

describe('NoticiaPageComponent', () => {
  let component: NoticiaPageComponent;
  let fixture: ComponentFixture<NoticiaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
