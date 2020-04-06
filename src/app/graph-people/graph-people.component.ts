import { Component, OnInit } from '@angular/core';
import { single } from './data';
@Component({
  selector: 'app-graph-people',
  templateUrl: './graph-people.component.html',
  styleUrls: ['./graph-people.component.css']
})
export class GraphPeopleComponent implements OnInit {
  showXAxisLabel=false;
  showYAxisLabel=false;
  single: any[];
  multi: any[];
  view: any[] = [200, 200];
  schemeType="linear";
  // options
 
  

  colorScheme = {
    domain: ['#9BBEFF']
  };

  constructor() {
    Object.assign(this, { single })
  }

  ngOnInit() {
  }

}
