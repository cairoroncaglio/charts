
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { contingente } from './contingente';

@Component({
  selector: 'app-pie-graphic',
  templateUrl: './pie-graphic.component.html',
  styleUrls: ['./pie-graphic.component.css']
})
export class PieGraphicComponent implements OnInit {

  single: any[];
  view: any[] = [600, 600];
  viewNumberChart: any[] = [400, 600]
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  cardColor: string = '#f2f2f2';
  colorScheme = {
    domain: ['rgb(117,0,75) ','rgb(148,0,63)','rgba(117,0,75,0.6) ', 'rgba(117,0,75,0.2) ',  'rgb(240,85,25)','rgba(240,85,25,0.6)','rgb(255,127,25)','rgb(255,205,67)','rgb(255,230,161)','rgba(255,230,161,0.8)','rgba(255,230,161,0.4)']
  };

  constructor() {
    Object.assign(this, { contingente });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {
  }

}
