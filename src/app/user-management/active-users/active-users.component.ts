import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onSetToInactive(id: number) {
    const userToSetToInactive = this.usersService.activeUsers.splice(id, 1);
    this.usersService.inactiveUsers.push(userToSetToInactive[0]);  }

}
