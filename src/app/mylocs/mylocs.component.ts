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
        locName: "nyc",
        lat: 25,
        lon: 30
      },
      {
        id: 1,
        locName: "nyc1",
        lat: 25,
        lon: 30
      },
      {
        id: 2,
        locName: "nyc2",
        lat: 25,
        lon: 30
      }


    ]


  }

}
