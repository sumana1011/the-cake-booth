import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeItemDetailsComponent } from './cake-item-details.component';

describe('CakeItemDetailsComponent', () => {
  let component: CakeItemDetailsComponent;
  let fixture: ComponentFixture<CakeItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
