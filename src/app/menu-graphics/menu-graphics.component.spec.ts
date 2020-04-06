import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGraphicsComponent } from './menu-graphics.component';

describe('MenuGraphicsComponent', () => {
  let component: MenuGraphicsComponent;
  let fixture: ComponentFixture<MenuGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
