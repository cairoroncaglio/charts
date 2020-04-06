import { PieGraphicComponent } from './pie-graphic/pie-graphic.component';
import { MapChartComponent } from './map-chart/map-chart.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { VerticalBarComponent } from './vertical-bar/vertical-bar.component';
import { MenuGraphicsComponent } from './menu-graphics/menu-graphics.component';
import { GraphPeopleComponent } from './graph-people/graph-people.component';
import { HeaderComponent } from './header/header.component';
import { GraphicsNgxChartComponent } from './graphics-ngx-chart/graphics-ngx-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'basic', component: HeaderComponent, children: [{
      path: 'graphic', component: GraphPeopleComponent
    }]
  },
  {
    path: '', component: HeaderComponent, children: [{
      path: '', component: MenuGraphicsComponent, children: [{
        path: '', component: GraphicsComponent
      }]
    }]
  },
  {
    path: '', component: HeaderComponent, children: [{
      path: 'gestor', component: MenuGraphicsComponent, children: [{
        path: 'contingente', component: GraphicsComponent, children: [{
          path: 'vertical-graphic', component: VerticalBarComponent
        }]
      }]
    }]
  },
  {
    path: '', component: HeaderComponent, children: [{
      path: 'gestor', component: MenuGraphicsComponent, children: [{
        path: 'contingente', component: GraphicsComponent, children: [{
          path: 'map-graphic', component: MapChartComponent
        }]
      }]
    }]
  },
  {
    path: '', component: HeaderComponent, children: [{
      path: 'gestor', component: MenuGraphicsComponent, children: [{
        path: 'contingente', component: GraphicsComponent, children: [{
          path: 'pie-graphic', component: PieGraphicComponent
        }]
      }]
    }]
  },
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
