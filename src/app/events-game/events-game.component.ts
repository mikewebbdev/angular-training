import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-game',
  templateUrl: './events-game.component.html',
  styleUrls: ['./events-game.component.css']
})
export class EventsGameComponent implements OnInit {
  runtimeOdd: number[] = [];
  runtimeEven: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onRuntimeUpdated($event: {runtime: number}) {
    if ($event.runtime % 2 === 0) {
      console.log('Even' + $event.runtime);
      this.runtimeEven.push($event.runtime);
    } else {
      console.log('Odd' + $event.runtime);
      this.runtimeOdd.push($event.runtime);

    }
  }
}
