import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers-edit',
  templateUrl: './servers-edit.component.html',
  styleUrls: ['./servers-edit.component.css']
})
export class ServersEditComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  ngOnInit(): void {
  }
}
