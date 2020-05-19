import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-loc-quick-view',
  templateUrl: './loc-quick-view.component.html',
  styleUrls: ['./loc-quick-view.component.css']
})
export class LocQuickViewComponent implements OnInit {

  name:string;
  lat:number;
  lon:number;
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    console.log(this.name);

  }

}
