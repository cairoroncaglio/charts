import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraphicsNgxChartComponent } from './graphics-ngx-chart/graphics-ngx-chart.component';
import { GraphPeopleComponent } from './graph-people/graph-people.component';
import { HeaderComponent } from './header/header.component';
import { MenuGraphicsComponent } from './menu-graphics/menu-graphics.component';
import { VerticalBarComponent } from './vertical-bar/vertical-bar.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { MapChartComponent } from './map-chart/map-chart.component';
import { PieGraphicComponent } from './pie-graphic/pie-graphic.component'
import { AngularFontAwesomeModule } from 'angular-font-awesome';




@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,MatButtonModule,MatCheckboxModule,
    MatTableModule,FormsModule,
    NgxChartsModule, AngularFontAwesomeModule
    
  ],
  declarations: [ AppComponent,
    GraphicsNgxChartComponent,
    GraphPeopleComponent,
    HeaderComponent,
    MenuGraphicsComponent,
    VerticalBarComponent,
    GraphicsComponent,
    MapChartComponent,
    PieGraphicComponent,
    
    
    
     ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})



export class AppModule { }
