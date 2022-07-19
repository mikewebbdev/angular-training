import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  h1 {
    color: blueviolet;
  }`]
})

export class AppComponent {
  display = false;
  log = [];

  toggleDisplay(){
    this.display = !this.display;
    this.log.push(this.display);
  }
}
