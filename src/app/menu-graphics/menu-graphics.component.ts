import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
@Component({
  selector: 'app-menu-graphics',
  templateUrl: './menu-graphics.component.html',
  styleUrls: ['./menu-graphics.component.css'],
  animations: [
    trigger('optionsMaxMin', [state('open', style({ height: '100%', backgroundColor: 'white', width: '90%' })),
    state('closed', style({ height: '100%', backgroundColor: 'white', width: '100%' })),
    transition('open => closed', [animate('0.2s')]),
    transition('closed => open', [animate('0.2s')]),
    ]),
    trigger('line', [state('open', style({ height: '2px', backgroundImage: 'linear-gradient(#ff6a1360, #ff6a13)', width: '100%' })),
    state('closed', style({ height: '2px', backgroundImage: 'linear-gradient( #ADAEb6, #dcdcdc)', width: '100%' })),
    transition('open => closed', [animate('0.2s')]),
    transition('closed => open', [animate('0.2s')]),
    ]),],
})

export class MenuGraphicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
