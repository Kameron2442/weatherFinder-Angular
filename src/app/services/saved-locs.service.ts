import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Loc } from '../models/Loc';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SavedLocsService {

  weatherFinderAPI = 'https://weatherfinderapi.azurewebsites.net/api/LocationItems';


  // default saved user locations
  private savedLocations = new BehaviorSubject<Loc[]>([
    // {
    //   locName: "Raleigh NC",
    //   lat: 35.77,
    //   lon: -78.63
    // },
    // {
    //   locName: "New York City",
    //   lat: 40.71,
    //   lon: -74.00
    // },
    // {
    //   locName: "Paris France",
    //   lat: 48.85,
    //   lon: 2.35
    // }
  ]); 


  
  currentSavedLocations = this.savedLocations.asObservable(); // obervable used by components

  constructor(private http:HttpClient) { 
    this.getSavedLocs().subscribe(savedLocs => {
      console.log(savedLocs);
      let mylocs:Loc[] = savedLocs;
      mylocs.forEach(item =>{
        this.appendLoc(item);
      })
    });
  }

  changeLocs(locs: Loc[]){
    this.savedLocations.next(locs);
  }

  // appends a new saved location
  appendLoc(newLoc: Loc){
    this.savedLocations.next(this.savedLocations.getValue().concat([newLoc]));
  }

  sendLoc(newLoc: Loc){
    this.http.post(this.weatherFinderAPI, newLoc, httpOptions).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }

  // deletes a saved location
  removeLoc(removeIndex: number, removeId: number){
    let newList = this.savedLocations.getValue();
    newList.splice(removeIndex,1);
    this.savedLocations.next(newList);
    this.http.delete(this.weatherFinderAPI + "/" + removeId.toString(), httpOptions).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
  }

  getSavedLocs():Observable<Loc[]>{

    return this.http.get<Loc[]>(this.weatherFinderAPI).pipe(
      map((json: any) => {
        let myLocList: Loc[] = [];
        let myLocs: any[] = json
        myLocs.forEach(item => {
          let currLoc: Loc = {
            id: item.id,
            locName: item.locName,
            lat: item.lat,
            lon: item.lon
          }
          myLocList.push(currLoc);

        });

        return myLocList;
      })
    );

  }




}
