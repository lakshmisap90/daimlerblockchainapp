import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  heroes = [];
  filteredData = [];
  statusOptions = [
    {
      "id":"1",
      "value":"Vehicle produced"
    },
    {
      "id":"2",
      "value":"Vehicle Exit Factory Dispatch Yard"
    },
    {
      "id":"3",
      "value":"Vehicle at Port of Departure"
    },
    {
      "id":"4",
      "value":"Vehicle Exit Port of Departure"
    },
    {
      "id":"5",
      "value":"Vehicle on Vessel"
    },
    {
      "id":"6",
      "value":"Vehicle Arrived at Storage"
    },
    {
      "id":"7",
      "value":"Marine Inspection Passed"
    },
    {
      "id":"8",
      "value":"Pay Duty for the vehicle"
    },
    {
      "id":"9",
      "value":"Customs Cleared"
    },
    {
      "id":"10",
      "value":"Vehicle Goods Receipt"
    },
    {
      "id":"11",
      "value":"Vehicle received at VPC - Start work"
    },
    {
      "id":"12",
      "value":"VPC Complete- Status Update"
    },
    {
      "id":"13",
      "value":"Delivery Create"
    }
  ];

  filter(event: any) {
    const searchedVariable:string = event.target.value;
    this.filteredData = this.heroes.filter(hero => hero.cargo.indexOf(searchedVariable) >= 0);
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {this.heroes = heroes ;  this.filteredData = heroes });
  }
}
