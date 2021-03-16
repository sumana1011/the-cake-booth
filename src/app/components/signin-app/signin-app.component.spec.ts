import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninAppComponent } from './signin-app.component';

describe('SigninAppComponent', () => {
  let component: SigninAppComponent;
  let fixture: ComponentFixture<SigninAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
