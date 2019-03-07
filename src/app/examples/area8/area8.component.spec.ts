import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Area8Component } from './area8.component';

describe('Area8Component', () => {
  let component: Area8Component;
  let fixture: ComponentFixture<Area8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Area8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Area8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
