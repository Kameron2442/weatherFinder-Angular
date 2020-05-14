import { Component, OnInit, Input } from '@angular/core';
import { Loc } from '../models/Loc';

@Component({
  selector: 'app-loc-item',
  templateUrl: './loc-item.component.html',
  styleUrls: ['./loc-item.component.css']
})
export class LocItemComponent implements OnInit {

  @Input() loc: Loc;


  constructor() { }

  ngOnInit(): void {
  }

}
