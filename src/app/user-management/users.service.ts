import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToActive(id: number) {
    const userToSetToActive = this.inactiveUsers.splice(id, 1);
    this.activeUsers.push(userToSetToActive[0]);
  }

  setToInactive(id: number) {
    const userToSetToInactive = this.activeUsers.splice(id, 1);
    this.inactiveUsers.push(userToSetToInactive[0]);
  }
}
