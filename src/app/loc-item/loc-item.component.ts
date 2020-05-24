import { Component, OnInit, Input } from '@angular/core';
import { Loc } from '../models/Loc';
import { LocWeather } from '../models/LocWeather';
import { GetLocWeatherService } from '../services/get-loc-weather.service';


@Component({
  selector: 'app-loc-item',
  templateUrl: './loc-item.component.html',
  styleUrls: ['./loc-item.component.css']
})
export class LocItemComponent implements OnInit {

  @Input() loc: Loc; // holds data about the location
  @Input() thisIndex: number; // index of component is passed to loc-quick-view as a parameter so that this location can be deleted
  weather: LocWeather; // holds weather data from the GetLocWeatherService
  temp: number; // temperature after conversions

  constructor(private weatherService: GetLocWeatherService) { }

  ngOnInit(): void {

    // gets the weather for the location that was passed to this component
    this.weatherService.getWeather(this.loc.lat,this.loc.lon).subscribe(data => {
      this.weather = data;
      this.temp = Math.round((this.weather.temp - 273.15) * (9/5) + 32);
    });

  }

}
