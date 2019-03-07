import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Area5Component } from './area5.component';

describe('Area5Component', () => {
  let component: Area5Component;
  let fixture: ComponentFixture<Area5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Area5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Area5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
