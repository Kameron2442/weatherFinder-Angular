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
        lat: 35.77,
        lon: -78.63
      },
      {
        id: 1,
        locName: "New York City",
        lat: 40.71,
        lon: -74.00
      },
      {
        id: 2,
        locName: "Paris France",
        lat: 48.85,
        lon: 2.35
      },
    ]


  }

}
