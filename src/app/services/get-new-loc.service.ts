import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Loc } from '../models/Loc';

@Injectable({
  providedIn: 'root'
})
export class GetNewLocService {

  getNewLocURL = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
  getNewLocAPIkey = '&maxRows=3&username=kameron2332';

  constructor(private http:HttpClient) { }

  // This function is used by loc-item components to get the weather for themselves
  getLocs(searchName: string):Observable<Loc[]>{
    const searchNameFix:string = searchName.split(' ').join('+');

    return this.http.get<Loc[]>(this.getNewLocURL + searchNameFix + this.getNewLocAPIkey).pipe(
      map((json: any) => {
        let myLocList: Loc[] = [];
        let myLocs: any[] = json.postalCodes;
        myLocs.forEach(item => {
          let currLoc: Loc = {
            locName: item.placeName,
            lat: item.lat,
            lon: item.lng
          }
          myLocList.push(currLoc);

        });

        return myLocList;
      })
    );

  }


}