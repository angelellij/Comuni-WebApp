import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfEspacioPageComponent } from './conf-espacio-page.component';

describe('ConfEspacioPageComponent', () => {
  let component: ConfEspacioPageComponent;
  let fixture: ComponentFixture<ConfEspacioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfEspacioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfEspacioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
