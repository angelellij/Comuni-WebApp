import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCentralComponent } from './app-central.component';

describe('AppCentralComponent', () => {
  let component: AppCentralComponent;
  let fixture: ComponentFixture<AppCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
