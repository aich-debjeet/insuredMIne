import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPicsComponent } from './display-pics.component';

describe('DisplayPicsComponent', () => {
  let component: DisplayPicsComponent;
  let fixture: ComponentFixture<DisplayPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
