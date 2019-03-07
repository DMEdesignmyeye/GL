import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Area4Component } from './area4.component';

describe('Area4Component', () => {
  let component: Area4Component;
  let fixture: ComponentFixture<Area4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Area4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Area4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
