import { Component, OnInit } from '@angular/core';
import {ServersService} from "../../servers.service";
import {ActivatedRoute, Data, Params, Router} from "@angular/router";

@Component({
  selector: 'app-routing-server',
  templateUrl: './routing-server.component.html',
  styleUrls: ['./routing-server.component.css']
})
export class RoutingServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(+id);
    // console.log(this.server);
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  }

  onEditClicked() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
