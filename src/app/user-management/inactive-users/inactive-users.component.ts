import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onSetToActive(id: number) {
    const userToSetToActive = this.usersService.inactiveUsers.splice(id, 1);
    this.usersService.activeUsers.push(userToSetToActive[0]);
  }
}
