import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsComponent } from './teams.component';

import { NgbdModalBasic } from './teams.component';
describe('TeamsComponent', () => {
  let component: TeamsComponent;
  let fixture: ComponentFixture<TeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



describe('NgbdModalBasic', () => {
  let component: NgbdModalBasic;
  let fixture: ComponentFixture<NgbdModalBasic>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdModalBasic ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModalBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});