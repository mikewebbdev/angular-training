import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  countActiveToInactive: number = 0;
  countInactiveToActive: number = 0;
}
