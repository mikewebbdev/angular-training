import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerRoutingComponent } from './server-routing.component';

describe('ServerRoutingComponent', () => {
  let component: ServerRoutingComponent;
  let fixture: ComponentFixture<ServerRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
