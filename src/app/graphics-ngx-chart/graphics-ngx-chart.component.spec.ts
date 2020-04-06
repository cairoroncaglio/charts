import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsNgxChartComponent } from './graphics-ngx-chart.component';

describe('GraphicsNgxChartComponent', () => {
  let component: GraphicsNgxChartComponent;
  let fixture: ComponentFixture<GraphicsNgxChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsNgxChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsNgxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
