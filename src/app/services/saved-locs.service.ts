import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Loc } from '../models/Loc';


@Injectable({
  providedIn: 'root'
})
export class SavedLocsService {

  private savedLocations = new BehaviorSubject<Loc[]>([]); // holds user's saved locations
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
