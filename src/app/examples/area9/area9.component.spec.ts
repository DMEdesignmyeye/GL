import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Area9Component } from './area9.component';

describe('Area9Component', () => {
  let component: Area9Component;
  let fixture: ComponentFixture<Area9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Area9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Area9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
