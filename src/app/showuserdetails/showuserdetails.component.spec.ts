import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuserdetailsComponent } from './showuserdetails.component';

describe('ShowuserdetailsComponent', () => {
  let component: ShowuserdetailsComponent;
  let fixture: ComponentFixture<ShowuserdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowuserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
