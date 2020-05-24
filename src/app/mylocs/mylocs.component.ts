import { Component, OnInit } from '@angular/core';
import { Loc } from '../models/Loc';
import { SavedLocsService } from '../services/saved-locs.service'

@Component({
  selector: 'app-mylocs',
  templateUrl: './mylocs.component.html',
  styleUrls: ['./mylocs.component.css']
})
export class MylocsComponent implements OnInit {

  mylocs:Loc[]; //array that holds locations

  constructor( private data: SavedLocsService ) { }

  ngOnInit(): void {

    // Default locations
    this.mylocs = [
      {
        locName: "Raleigh NC",
        lat: 35.77,
        lon: -78.63
      },
      {
        locName: "New York City",
        lat: 40.71,
        lon: -74.00
      },
      {
        locName: "Paris France",
        lat: 48.85,
        lon: 2.35
      },
    ]

    this.data.changeLocs(this.mylocs);
    this.data.currentSavedLocations.subscribe(message => this.mylocs = message);

  }

  // gets triggered when a new-loc component emits a location to be added as a saved location
  receiveLocation($event){
    this.data.appendLoc($event);
  }

}
