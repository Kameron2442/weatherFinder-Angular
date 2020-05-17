import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Loc } from '../models/Loc';
import { GetNewLocService } from '../services/get-new-loc.service';


@Component({
  selector: 'app-new-loc',
  templateUrl: './new-loc.component.html',
  styleUrls: ['./new-loc.component.css']
})
export class NewLocComponent implements OnInit {

  searchedLocs: Loc[] = [];
  @Output() addLoc = new EventEmitter<Loc>();

  constructor(private newLocService: GetNewLocService) { }

  ngOnInit(): void {

  }

  onSearchChange(searchValue: string): void {  
    this.newLocService.getLocs(searchValue).subscribe(data => {
      this.searchedLocs = data;
      console.log(data);
    });
  }

  sendLoc(index: number){
    this.addLoc.emit(this.searchedLocs[index]);
    this.searchedLocs = [];
  }

}
