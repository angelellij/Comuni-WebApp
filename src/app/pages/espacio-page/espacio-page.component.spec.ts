import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioPageComponent } from './espacio-page.component';

describe('EspacioPageComponent', () => {
  let component: EspacioPageComponent;
  let fixture: ComponentFixture<EspacioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
