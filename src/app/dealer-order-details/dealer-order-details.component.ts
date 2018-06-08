import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from "@angular/router";
import { Quotation } from '../quotation';
import { QuotationService } from '../quotation.services';
import { Data } from "../provider/order-data.provider";

@Component({
  selector: 'app-dealer-order-details',
  templateUrl: './dealer-order-details.component.html',
  styleUrls: ['./dealer-order-details.component.css']
})
export class DealerOrderDetailsComponent implements OnInit {
  quotation = {};
  constructor(private data: Data) {
    this.quotation = this.data.storage.quotationDetails[0];
    this.data.storage.vehicles = this.quotation.vehicles;
    this.data.storage.comments = this.quotation.delayReasons;
  }
  openGoogleMap(latitude,longitude) : void {
    window.open("http://www.google.com/maps/place/' + latitude ',' + longitude'");
  }
  ngOnInit() {
  }
}
