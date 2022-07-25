import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-management',
  templateUrl: './server-management.component.html',
  styleUrls: ['./server-management.component.css']
})
export class ServerManagementComponent implements OnInit {
  serverElements = [
    {type: 'server', name: 'TestServer', content: 'Just spinning up a test'},
    {type: 'blueprint', name: 'TestBlueprint', content: 'Just sketching out a test'}
  ];
  constructor() { }

  ngOnInit(): void {
  }


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
}
