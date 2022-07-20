import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() {
  }

  ngOnInit(): void {
  }
}
