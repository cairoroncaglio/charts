import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.css'],
  animations: [
  
     trigger('optionsLegendGraphic', [
    state('open', style({height: '220px',backgroundColor: '#ff6a13',width: '67.5px', color:'white'})),
    state('closed', style({height: '190px',backgroundColor: 'white',width: '67.5px',color:'#ADAEB6'})),
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
export class VerticalBarComponent implements OnInit {
  
   //Vertical Bar 
   view: any[] = [980, 250];
   option1 = false;
   option2 = false;
   option3 = false;
   option4 = false;
   option5 = false;
   option6 = false;
   optionGraphic1=false;
   optionGraphic2=false;
   optionGraphic3=false;
   optionLegendGraphic1=false;
   optionLegendGraphic2=false;
   optionLegendGraphic3=false;
   optionLegendGraphic4=false;
   optionLegendGraphic5=false;
   optionLegendGraphic6=false;
   optionLegendGraphic7=false;
   optionLegendGraphic8=false;
   optionLegendGraphic9=false;
   optionLegendGraphic10=false;
   optionLegendGraphic11=false; 
 //tabs
   heatMapChart=false;
   barVerticalStacked=true;
   
   graphicOptionsBtn=">";
   graphicOptionsBoolean=true;
 
   //Vertical Bar 
 
 
   // options
   showXAxis: boolean = true;
   showYAxis: boolean = true;
   gradient: boolean = false;
   showLegend: boolean = true;
   showXAxisLabel: boolean = true;
   xAxisLabel: string = 'Função';
   showYAxisLabel: boolean = true;
   yAxisLabel: string = '';
   animations: boolean = true;
   // options
  
 
   colorScheme = {
    domain: ['rgb(240,85,25)','rgba(240,85,25,0.6)','rgb(255,127,25)','rgb(255,205,67)','rgb(255,230,161)','rgba(255,230,161,0.8)','rgba(255,230,161,0.4)']
  };
   multi = [
     {"name": "ENCHEDORA",
       "series": 
       [
         {"name": "OPERADOR PLENO FABRIL","value": 1},
         {"name": "OPERADOR FABRIL","value": 2},
         {"name": "TEC OPERADOR PLENO FABRIL","value": 1},
         {"name": "TEC OPERADOR FABRIL","value": 3},
         {"name": "TEC OPERADOR SENIOR FABRIL","value": 1},
         {"name": "TEC OPERADOR MASTER FABRIL","value": 0},
         {"name": "SUPERVISOR FABRIL","value": 2},
         {"name": "SUPERVISOR PLENO FABRIL","value": 0},
         {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 0}
       ]
     }, 
     {"name": "PALETIZADORA",
     "series": 
     [
       {"name": "OPERADOR PLENO FABRIL","value": 3},
       {"name": "OPERADOR FABRIL","value": 4},
       {"name": "TEC OPERADOR PLENO FABRIL","value": 1},
       {"name": "TEC OPERADOR FABRIL","value": 3},
       {"name": "TEC OPERADOR SENIOR FABRIL","value": 1},
       {"name": "TEC OPERADOR MASTER FABRIL","value": 1},
       {"name": "SUPERVISOR FABRIL","value": 0},
       {"name": "SUPERVISOR PLENO FABRIL","value": 0},
       {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 0}
     ]
   },
   {"name": "EMPACOTADORA",
   "series": 
   [
     {"name": "OPERADOR PLENO FABRIL","value": 1},
     {"name": "OPERADOR FABRIL","value": 8},
     {"name": "TEC OPERADOR PLENO FABRIL","value": 9},
     {"name": "TEC OPERADOR FABRIL","value": 0},
     {"name": "TEC OPERADOR SENIOR FABRIL","value": 0},
     {"name": "TEC OPERADOR MASTER FABRIL","value": 1},
     {"name": "SUPERVISOR FABRIL","value": 0},
     {"name": "SUPERVISOR PLENO FABRIL","value": 0},
     {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 0}
   ]
 },
 {"name": "SALA DE VALVULAS",
 "series": 
 [
   {"name": "OPERADOR PLENO FABRIL","value": 0},
   {"name": "OPERADOR FABRIL","value": 3},
   {"name": "TEC OPERADOR PLENO FABRIL","value": 5},
   {"name": "TEC OPERADOR FABRIL","value": 2},
   {"name": "TEC OPERADOR SENIOR FABRIL","value": 1},
   {"name": "TEC OPERADOR MASTER FABRIL","value": 2},
   {"name": "SUPERVISOR FABRIL","value": 0},
   {"name": "SUPERVISOR PLENO FABRIL","value": 1},
   {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 0}
 ]
 },
 {"name": "LIDER",
 "series": 
 [
   {"name": "OPERADOR PLENO FABRIL","value": 0},
   {"name": "OPERADOR FABRIL","value": 1},
   {"name": "TEC OPERADOR PLENO FABRIL","value": 0},
   {"name": "TEC OPERADOR FABRIL","value": 0},
   {"name": "TEC OPERADOR SENIOR FABRIL","value": 2},
   {"name": "TEC OPERADOR MASTER FABRIL","value": 3},
   {"name": "SUPERVISOR FABRIL","value": 1},
   {"name": "SUPERVISOR PLENO FABRIL","value": 1},
   {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 1}
 ]
 },
 {"name": "SOPRADORA",
 "series": 
 [
   {"name": "OPERADOR PLENO FABRIL","value": 3},
   {"name": "OPERADOR FABRIL","value": 1},
   {"name": "TEC OPERADOR PLENO FABRIL","value": 8},
   {"name": "TEC OPERADOR FABRIL","value": 3},
   {"name": "TEC OPERADOR SENIOR FABRIL","value": 0},
   {"name": "TEC OPERADOR MASTER FABRIL","value": 0},
   {"name": "SUPERVISOR FABRIL","value": 0},
   {"name": "SUPERVISOR PLENO FABRIL","value": 0},
   {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 0}
 ]
 },
 {"name": "ROTULADORA",
 "series": 
 [
   {"name": "OPERADOR PLENO FABRIL","value": 8},
   {"name": "OPERADOR FABRIL","value": 5},
   {"name": "TEC OPERADOR PLENO FABRIL","value": 1},
   {"name": "TEC OPERADOR FABRIL","value": 5},
   {"name": "TEC OPERADOR SENIOR FABRIL","value": 1},
   {"name": "TEC OPERADOR MASTER FABRIL","value": 0},
   {"name": "SUPERVISOR FABRIL","value": 0},
   {"name": "SUPERVISOR PLENO FABRIL","value": 0},
   {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 0}
 ]
 },
 {"name": "SUPERVISOR PET",
 "series": 
 [
   {"name": "OPERADOR PLENO FABRIL","value": 0},
   {"name": "OPERADOR FABRIL","value": 0},
   {"name": "TEC OPERADOR PLENO FABRIL","value": 0},
   {"name": "TEC OPERADOR FABRIL","value": 0},
   {"name": "TEC OPERADOR SENIOR FABRIL","value": 0},
   {"name": "TEC OPERADOR MASTER FABRIL","value": 1},
   {"name": "SUPERVISOR FABRIL","value": 1},
   {"name": "SUPERVISOR PLENO FABRIL","value": 0},
   {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 2}
 ]
 },
 {"name": "SUPERVISOR LATA",
 "series": 
 [
   {"name": "OPERADOR PLENO FABRIL","value": 0},
   {"name": "OPERADOR FABRIL","value": 0},
   {"name": "TEC OPERADOR PLENO FABRIL","value": 0},
   {"name": "TEC OPERADOR FABRIL","value": 0},
   {"name": "TEC OPERADOR SENIOR FABRIL","value": 2},
   {"name": "TEC OPERADOR MASTER FABRIL","value": 1},
   {"name": "SUPERVISOR FABRIL","value": 1},
   {"name": "SUPERVISOR PLENO FABRIL","value": 0},
   {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 1}
 ]
 },
 {"name": "STAFF PACKING/PRODUCAO",
 "series": 
 [
   {"name": "OPERADOR PLENO FABRIL","value": 0},
   {"name": "OPERADOR FABRIL","value": 0},
   {"name": "TEC OPERADOR PLENO FABRIL","value": 0},
   {"name": "TEC OPERADOR FABRIL","value": 0},
   {"name": "TEC OPERADOR SENIOR FABRIL","value": 1},
   {"name": "TEC OPERADOR MASTER FABRIL","value": 5},
   {"name": "SUPERVISOR FABRIL","value": 0},
   {"name": "SUPERVISOR PLENO FABRIL","value": 2},
   {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 1}
 ]
 },{"name": "MANUTENÇÃO",
 "series": 
 [
   {"name": "OPERADOR PLENO FABRIL","value": 0},
   {"name": "OPERADOR FABRIL","value": 4},
   {"name": "TEC OPERADOR PLENO FABRIL","value": 0},
   {"name": "TEC OPERADOR FABRIL","value": 8},
   {"name": "TEC OPERADOR SENIOR FABRIL","value": 3},
   {"name": "TEC OPERADOR MASTER FABRIL","value": 2},
   {"name": "SUPERVISOR FABRIL","value": 0},
   {"name": "SUPERVISOR PLENO FABRIL","value": 0},
   {"name": "ESPECIALISTA DE PRODUTIVIDADE PLENO FABRIL","value": 0}
 ]
 },
       ];
  
 
   constructor() {
     Object.assign(this, {  })
   }
 
   onSelect(event) {
     console.log(event);
   }
 
   ngOnInit() {
   }
  

}
