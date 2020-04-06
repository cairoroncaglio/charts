import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPeopleComponent } from './graph-people.component';

describe('GraphPeopleComponent', () => {
  let component: GraphPeopleComponent;
  let fixture: ComponentFixture<GraphPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
