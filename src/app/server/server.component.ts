import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus() {
    return this.serverStatus;
  }

  getStatusClass() {
    return this.serverStatus === 'online' ? 'alert-success' : 'alert-danger';
  }
}
