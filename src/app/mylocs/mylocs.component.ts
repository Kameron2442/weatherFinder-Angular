import { Component, OnInit } from '@angular/core';
import { Loc } from '../models/Loc';

@Component({
  selector: 'app-mylocs',
  templateUrl: './mylocs.component.html',
  styleUrls: ['./mylocs.component.css']
})
export class MylocsComponent implements OnInit {

  mylocs:Loc[];

  constructor() { }

  ngOnInit(): void {

    this.mylocs = [
      {
        id: 0,
        locName: "Raleigh NC",
        lat: 35.7796,
        lon: 78.6382
      },
      {
        id: 1,
        locName: "New York City",
        lat: 40.7128,
        lon: 74.0060
      },
      {
        id: 2,
        locName: "Paris France",
        lat: 46.2276,
        lon: 2.2137
      },
    ]


  }

}
