import { singlePie } from './dataOfEatingBehavior';
import { Component, OnInit , NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-graphics-ngx-chart',
  templateUrl: './graphics-ngx-chart.component.html',
  styleUrls: ['./graphics-ngx-chart.component.css']
})
export class GraphicsNgxChartComponent implements OnInit {

  viewBar: any[] = [140, 300];
  colorSchemeBar = {
    domain: ['rgb(63, 230, 63)', 'rgba(63, 230, 63,0.8)', 'rgba(63, 230, 63,0.6)', 'rgba(63, 230, 63,0.4)']
  };
  singlePie:any[];
  viewPie: any[] = [500, 400];
  colorSchemePie = {
    domain: ['#FFC72C', '#1BB6B2', '#FF6013','#4B89FF']
  };

  constructor() {
    Object.assign(this, { singlePie });
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnInit() {
  }

}
