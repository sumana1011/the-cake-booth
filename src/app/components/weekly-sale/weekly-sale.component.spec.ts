import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySaleComponent } from './weekly-sale.component';

describe('WeeklySaleComponent', () => {
  let component: WeeklySaleComponent;
  let fixture: ComponentFixture<WeeklySaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklySaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
