import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona-screen',
  templateUrl: './persona-screen.component.html',
  styleUrls: ['./persona-screen.component.css']
})
export class PersonaScreenComponent implements OnInit {
  persona = [
    {
      "name" : "Freight Forwarder",
      "src" : "/assets/images/ff.png",
      "navUrl" : "/login"
    },
    {
      "name" : "MPC",
      "src" : "/assets/images/dealer.png",
      "navUrl" : "#"
    },
    {
      "name" : "Dealer",
      "src" : "/assets/images/mpc.png",
      "navUrl" : "/dealer/orders"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
