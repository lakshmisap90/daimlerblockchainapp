import { Component, OnInit } from '@angular/core';
import { Data } from "../provider/order-data.provider";

@Component({
  selector: 'app-order-response',
  templateUrl: './order-response.component.html',
  styleUrls: ['./order-response.component.css']
})
export class OrderResponseComponent implements OnInit {
  quotationResponse = [];
  constructor(private data: Data) { }

  ngOnInit() {
    this.quotationResponse = this.data.storage.comments;
  }

}
