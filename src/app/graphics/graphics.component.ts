import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css'],
  animations: [
  

    trigger('lineSubmenu', [state('open', style({height: '10px',backgroundImage: 'linear-gradient(#ff6a1360, #ff6a13)', width: '100%'})),
    state('closed', style({height: '3px',backgroundImage: 'linear-gradient(rgba(244,233,233,0),rgba(244,233,233,0))',width: '100%'})),
    transition('open => closed', [animate('0.2s')]),
    transition('closed => open', [animate('0.2s')]),
  ]), 
    trigger('submenu', [state('open', style({height: '65px',backgroundColor: '#ff6a13', width: '251px' ,color:'white'})),
    state('closed', style({height: '64px',backgroundColor: 'white',width: '250px',color:'#54565a'})),
    transition('open => closed', [animate('0.2s')]),
    transition('closed => open', [animate('0.2s')]),
  ])
  ],

})
export class GraphicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
