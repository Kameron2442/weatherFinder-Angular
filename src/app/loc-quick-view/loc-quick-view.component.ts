import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { GetLocWeatherService } from '../services/get-loc-weather.service';
import { LocWeatherDetail } from '../models/LocWeatherDetail';

@Component({
  selector: 'app-loc-quick-view',
  templateUrl: './loc-quick-view.component.html',
  styleUrls: ['./loc-quick-view.component.css']
})
export class LocQuickViewComponent implements OnInit {

  name:string;
  lat:number;
  lon:number;
  forecast:string;
  myLocWeatherDetail: LocWeatherDetail;
  

  constructor(private route:ActivatedRoute, private weatherService: GetLocWeatherService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.lat = params['lat'];
      this.lon = params['lon'];
      this.forecast = this.name + "+" + this.lat + "+" + this.lon;

      this.weatherService.getWeatherDetail(this.lat,this.lon).subscribe(data => {
        this.myLocWeatherDetail = data;
      });
  
    });
    
  }

}
