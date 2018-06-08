import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from "../provider/order-data.provider";

@Component({
  selector: 'app-order-vehicle-list',
  templateUrl: './order-vehicle-list.component.html',
  styleUrls: ['./order-vehicle-list.component.css']
})
export class OrderVehicleListComponent implements OnInit {
  vehicles = [];
  constructor(private data: Data , private router: Router) { }

  ngOnInit() {
    this.vehicles = this.data.storage.vehicles;
  }

  navigateToDetails(event,vId) : void {
      this.data.storage.vehicleDetails =  this.vehicles.filter(item => item.vId == vId);
      this.router.navigate(['order/vehicle/'vId]);
  }
}
