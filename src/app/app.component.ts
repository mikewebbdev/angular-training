import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'TestServer', content: 'Just spinning up a test'},
    {type: 'blueprint', name: 'TestBlueprint', content: 'Just sketching out a test'}
  ];
  runtimeOdd: number[] = [];
  runtimeEven: number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
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
