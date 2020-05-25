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

    // gets the saved locations to make the loc-items 
    this.data.currentSavedLocations.subscribe(message => this.mylocs = message);

  }

  // gets triggered when a new-loc component emits a location to be added as a saved location
  receiveLocation($event){
    this.data.appendLoc($event);
  }

}
