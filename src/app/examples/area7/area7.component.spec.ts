import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Area7Component } from './area7.component';

describe('Area7Component', () => {
  let component: Area7Component;
  let fixture: ComponentFixture<Area7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Area7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Area7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
