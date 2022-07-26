import {Inject, Injectable, Injector} from '@angular/core';
import {CounterService} from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
  }

  setToActive(id: number) {
    const userToSetToActive = this.inactiveUsers.splice(id, 1);
    this.activeUsers.push(userToSetToActive[0]);
    this.counterService.countInactiveToActive++;
    console.log('Users set to active: ' + this.counterService.countInactiveToActive)

  }

  setToInactive(id: number) {
    const userToSetToInactive = this.activeUsers.splice(id, 1);
    this.inactiveUsers.push(userToSetToInactive[0]);
    this.counterService.countActiveToInactive++;
    console.log('Users set to inactive: ' + this.counterService.countActiveToInactive)
  }
}
