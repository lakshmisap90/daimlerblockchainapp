import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { Data } from "../provider/order-data.provider";

@Component({
  selector: 'app-order-vehicle-details',
  templateUrl: './order-vehicle-details.component.html',
  styleUrls: ['./order-vehicle-details.component.css']
})
export class OrderVehicleDetailsComponent implements OnInit {

  constructor(private data: Data ) { }
  vehicleDetail = {};

  ngOnInit() {
    this.vehicleDetail =  this.data.storage.vehicleDetails[0];
  }
}
