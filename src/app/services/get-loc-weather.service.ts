import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocWeather } from '../models/LocWeather';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocWeatherDetail } from '../models/LocWeatherDetail';


@Injectable({
  providedIn: 'root'
})
export class GetLocWeatherService {

  getWeatherUrl:string = 'https://api.openweathermap.org/data/2.5/onecall?';
  getWeatherAPIkey:string = '&exclude=hourly,daily&appid=1233faf42e75a019262a8262817b08ce';

  constructor(private http:HttpClient) { }

  // This function is used by loc-item components to get the weather for themselves
  getWeather(lat:number, lon:number):Observable<LocWeather>{
    const lat_s:string = 'lat=' + lat.toString();
    const lon_s:string = '&lon=' + lon.toString();

    return this.http.get<LocWeather>(this.getWeatherUrl + lat_s + lon_s + this.getWeatherAPIkey).pipe(
      map((json: any) => {
          return <LocWeather> {
            temp: json.current.temp,
            humidity: json.current.humidity,
            desc: json.current.weather[0].description
          }
      })
    );

  }

  // This function is used by the Loc-quick-view component to get more weather details
  getWeatherDetail(lat:number, lon:number):Observable<LocWeatherDetail>{
    const lat_s:string = 'lat=' + lat.toString();
    const lon_s:string = '&lon=' + lon.toString();

    return this.http.get<LocWeatherDetail>(this.getWeatherUrl + lat_s + lon_s + this.getWeatherAPIkey).pipe(
      map((json: any) => {
          return <LocWeatherDetail> {
            desc: json.current.weather[0].description, // location weather description
            temp: json.current.temp, // location temperature
            feelLike: json.current.feels_like,
            humidity: json.current.humidity,
            clouds: json.current.clouds,
            windSpeed: json.current.wind_speed,
            pressure: json.current.pressure,
            icon: json.current.weather[0].icon
          }
      })
    );
  }


}
