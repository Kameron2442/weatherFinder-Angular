import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Loc } from '../models/Loc';
import { GetNewLocService } from '../services/get-new-loc.service';


@Component({
  selector: 'app-new-loc',
  templateUrl: './new-loc.component.html',
  styleUrls: ['./new-loc.component.css']
})
export class NewLocComponent implements OnInit {

  searchedLocs: Loc[] = []; // holds recived locations from onSearchChange()
  @Output() addLoc = new EventEmitter<Loc>(); // used to output a location to be added to the user's saved locations

  constructor(private newLocService: GetNewLocService) { }

  ngOnInit(): void {

  }

  // this gets three new locations from geonames that the user can add to their saved locations
  onSearchChange(searchValue: string): void {  
    this.newLocService.getLocs(searchValue).subscribe(data => {
      this.searchedLocs = data;
    });
  }

  // this outputs the clicked location to the mylocs component where it is then added to the user's saved locations
  sendLoc(index: number){
    this.addLoc.emit(this.searchedLocs[index]);
    this.searchedLocs = [];
  }

}
