import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LocWeatherForecast } from '../models/LocForecast';
import { GetLocWeatherService } from '../services/get-loc-weather.service';


@Component({
  selector: 'app-loc-forecast',
  templateUrl: './loc-forecast.component.html',
  styleUrls: ['./loc-forecast.component.css']
})
export class LocForecastComponent implements OnInit {

  myForecast: LocWeatherForecast;
  locName: string;

  constructor( private route: ActivatedRoute, private router: Router, private weatherService: GetLocWeatherService ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let myparams = params.get('loc');
      let myparamsArr = myparams.split('+');
      this.weatherService.getWeatherForecast(Number(myparamsArr[1]), Number(myparamsArr[2])).subscribe(data => {
        this.locName = myparamsArr[0];
        this.myForecast = data;
        console.log(this.myForecast);
      });


    });
        

  }

}
