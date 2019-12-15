import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaABMComponent } from './noticia-abm.component';

describe('NoticiaABMComponent', () => {
  let component: NoticiaABMComponent;
  let fixture: ComponentFixture<NoticiaABMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaABMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaABMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
