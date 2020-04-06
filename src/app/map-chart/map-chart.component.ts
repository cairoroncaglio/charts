import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './contingente';
import { trigger, state, style, animate, transition, } from '@angular/animations';
@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.css'], 
   animations: [
    trigger('optionsLegendGraphicYaxis', [
      state('open', style({height: '33.5px',backgroundColor: '#ff6a13',width: '230px',color:'white'})),
      state('closed', style({height: '33.5px',backgroundColor: 'white',width: '220px',color:'#ADAEB6'})),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
    trigger('optionsLegendGraphicXaxis', [
      state('open', style({height: '190px',backgroundColor: '#ff6a13',width: '33.5px',color:'white'})),
      state('closed', style({height: '180px',backgroundColor: 'white',width: '33.5px',color:'#ADAEB6'})),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  
],
})
export class MapChartComponent implements OnInit {

  multi: any[];
  view: any[] = [570, 390];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  yAxisLabel: string = 'Year';

  colorScheme = {
    domain: ['white','#ffc72c','#ff6a13','#ba0c2f']
  };

  constructor() {
    Object.assign(this, { multi });
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
