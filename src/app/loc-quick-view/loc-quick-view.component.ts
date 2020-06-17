import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { GetLocWeatherService } from '../services/get-loc-weather.service';
import { LocWeatherDetail } from '../models/LocWeatherDetail';
import { SavedLocsService } from '../services/saved-locs.service'


@Component({
  selector: 'app-loc-quick-view',
  templateUrl: './loc-quick-view.component.html',
  styleUrls: ['./loc-quick-view.component.css']
})
export class LocQuickViewComponent implements OnInit {

  locID:number; // Id of location in DB
  name:string; // name of location
  lat:number; // lat of location
  lon:number; // lon of location
  index: number; // index of location in the user's saved locations array
  forecast:string; // expirementing with a different way of routing using a single string variable
  myLocWeatherDetail: LocWeatherDetail; // object that holds more data about the current weather at a location
  

  constructor( private data: SavedLocsService, private route:ActivatedRoute, private weatherService: GetLocWeatherService) { }

  ngOnInit(): void {

    // gets the url parameters which hold data about the location
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.lat = params['lat'];
      this.lon = params['lon'];
      this.index = params['index'];
      this.locID = params['locID'];
      this.forecast = this.name + "+" + this.lat + "+" + this.lon;

      // gets the location's extra weather details
      this.weatherService.getWeatherDetail(this.lat,this.lon).subscribe(data => {
        this.myLocWeatherDetail = data;
      });
  
    });
    
  }

  // deletes the location from the user's saved locations
  deleteLoc(){
    console.log("deleting at index: ", this.index);
    this.data.removeLoc(this.index, this.locID);
  }

}
