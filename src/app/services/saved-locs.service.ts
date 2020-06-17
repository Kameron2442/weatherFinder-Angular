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



  private savedLocations = new BehaviorSubject<Loc[]>([]);   // saved user locations
  currentSavedLocations = this.savedLocations.asObservable(); // obervable used by components
  weatherFinderAPI = 'https://weatherfinderapi.azurewebsites.net/api/LocationItems'; // Link to .NET REST backend


  constructor(private http:HttpClient) { 

    // this gets all the saved locations in the db and appends them to savedLocations
    this.getSavedLocs().subscribe(savedLocs => {
      let mylocs:Loc[] = savedLocs;
      mylocs.forEach(item =>{
        this.appendLoc(item);
      })
    });

  }

  // appends a new location to savedLocations
  appendLoc(newLoc: Loc){
    this.savedLocations.next(this.savedLocations.getValue().concat([newLoc]));
  }

  // sends a new location to db
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

  // gets all the saved locations from db
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
