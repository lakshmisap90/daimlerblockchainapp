import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderVehicleListComponent } from './order-vehicle-list.component';

describe('OrderVehicleListComponent', () => {
  let component: OrderVehicleListComponent;
  let fixture: ComponentFixture<OrderVehicleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderVehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
