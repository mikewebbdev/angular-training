import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('running') gameRunning = new EventEmitter<{runtime: number}>();
  runtime: number = 0;
  intervalId: number;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.intervalId = setInterval(() => {
      this.runtime++;
      this.gameRunning.emit({
        runtime: this.runtime
      });
    },1000)
  }

  onStopGame() {
    clearInterval(this.intervalId);
    this.runtime = 0;
  }

}
