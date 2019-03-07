import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Area6Component } from './area6.component';

describe('Area6Component', () => {
  let component: Area6Component;
  let fixture: ComponentFixture<Area6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Area6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Area6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
