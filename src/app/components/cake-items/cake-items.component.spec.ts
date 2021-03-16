import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeItemsComponent } from './cake-items.component';

describe('CakeItemsComponent', () => {
  let component: CakeItemsComponent;
  let fixture: ComponentFixture<CakeItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
