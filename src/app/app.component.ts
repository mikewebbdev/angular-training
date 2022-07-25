import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'account-management';

  onNavigate(target: {selectedFeature: string}) {
    this.loadedFeature = target.selectedFeature;
  }
}
