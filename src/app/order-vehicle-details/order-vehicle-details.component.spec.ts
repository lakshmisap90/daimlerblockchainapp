import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderVehicleDetailsComponent } from './order-vehicle-details.component';

describe('OrderVehicleDetailsComponent', () => {
  let component: OrderVehicleDetailsComponent;
  let fixture: ComponentFixture<OrderVehicleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderVehicleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
