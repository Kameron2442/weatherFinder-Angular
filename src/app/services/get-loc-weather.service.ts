import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocWeather } from '../models/LocWeather';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetLocWeatherService {

  getWeatherUrl:string = 'https://api.openweathermap.org/data/2.5/onecall?';
  getWeatherAPIkey:string = '&exclude=hourly,daily&appid=1233faf42e75a019262a8262817b08ce';

  constructor(private http:HttpClient) { }

  getWeather(lat:number, lon:number):Observable<LocWeather>{
    const lat_s:string = 'lat=' + lat.toString();
    const lon_s:string = '&lon=' + lon.toString();

    return this.http.get<LocWeather>(this.getWeatherUrl + lat_s + lon_s + this.getWeatherAPIkey).pipe(
      map((json: any) => {
        console.log(json);
          return <LocWeather> {
            temp: json.current.temp,
            humidity: json.current.humidity,
            desc: json.current.weather[0].description
          }
      })
    );

  }

}
