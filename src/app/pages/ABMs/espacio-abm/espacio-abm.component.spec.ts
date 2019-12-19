import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioAbmComponent } from './espacio-abm.component';

describe('EspacioAbmComponent', () => {
  let component: EspacioAbmComponent;
  let fixture: ComponentFixture<EspacioAbmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacioAbmComponent ]
    })
    .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
