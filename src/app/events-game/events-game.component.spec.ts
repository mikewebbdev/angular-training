import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGameComponent } from './events-game.component';

describe('EventsGameComponent', () => {
  let component: EventsGameComponent;
  let fixture: ComponentFixture<EventsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
