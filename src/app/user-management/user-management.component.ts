import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
  providers: [UsersService]
})
export class UserManagementComponent implements OnInit {
  activeUsers = this.usersService.activeUsers;
  inactiveUsers = this.usersService.inactiveUsers;

  constructor(private usersService: UsersService, private counterService: CounterService) { }

  ngOnInit(): void {
  }

}
