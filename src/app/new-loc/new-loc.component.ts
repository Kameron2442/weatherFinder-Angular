import { Component, OnInit } from '@angular/core';
import { Loc } from '../models/Loc';
import { GetNewLocService } from '../services/get-new-loc.service';


@Component({
  selector: 'app-new-loc',
  templateUrl: './new-loc.component.html',
  styleUrls: ['./new-loc.component.css']
})
export class NewLocComponent implements OnInit {

  searchedLocs: Loc[] = [];

  constructor(private newLocService: GetNewLocService) { }

  ngOnInit(): void {

  }

  onSearchChange(searchValue: string): void {  
    this.newLocService.getLocs(searchValue).subscribe(data => {
      this.searchedLocs = data;
      console.log(data);
    });
  }

}
