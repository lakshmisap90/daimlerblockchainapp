import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; editorEnabled: boolean;  editStatus: string;
  sucessMessageEnabled = true;
  status = 'Vehicle produced';
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

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    let localStatus = localStorage.getItem('status');
    if (localStatus === undefined || localStatus == 'null') {
      localStorage.setItem('status', 'Vehicle produced');
    }
      this.status =  localStatus;
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  editData(): void {
    this.editorEnabled = true;
    this.editStatus = this.status;
    this.sucessMessageEnabled = true;
  }

  saveData(): void {
    this.editorEnabled = false;
    this.status = this.editStatus;
    localStorage.setItem('status', this.status);
    this.sucessMessageEnabled = false;
  }

  changeStatus(event) : void{
    this.editStatus = event.target.value;
  }

  valueChange(value): void {
    this.editStatus = value;
  }

  disableEditor(value): void {
    this.editorEnabled = false;
  }

 save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
