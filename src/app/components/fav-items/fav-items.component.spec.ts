import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavItemsComponent } from './fav-items.component';

describe('FavItemsComponent', () => {
  let component: FavItemsComponent;
  let fixture: ComponentFixture<FavItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
