import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfSaleComponent } from './point-of-sale.component';

describe('PointOfSaleComponent', () => {
  let component: PointOfSaleComponent;
  let fixture: ComponentFixture<PointOfSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointOfSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointOfSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
