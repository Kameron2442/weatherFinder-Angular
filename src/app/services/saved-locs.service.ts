import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Loc } from '../models/Loc';


@Injectable({
  providedIn: 'root'
})
export class SavedLocsService {

  // default saved user locations
  private savedLocations = new BehaviorSubject<Loc[]>([
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
    }
  ]); 
  currentSavedLocations = this.savedLocations.asObservable(); // obervable used by components

  constructor() { }

  changeLocs(locs: Loc[]){
    this.savedLocations.next(locs);
  }

  // appends a new saved location
  appendLoc(newLoc: Loc){
    this.savedLocations.next(this.savedLocations.getValue().concat([newLoc]));
  }

  // deletes a saved location
  removeLoc(removeIndex: number){
    let newList = this.savedLocations.getValue();
    newList.splice(removeIndex,1);
    this.savedLocations.next(newList);
  }

}
