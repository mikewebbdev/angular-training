import { Component } from '@angular/core';
import {AccountsService} from "./accounts.service";

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css'],
  providers: [AccountsService]
})
export class AccountManagementComponent {
  accounts = this.accountsService.accounts;

  constructor(private accountsService: AccountsService) {
  }

  onAccountAdded(newAccount: {name: string, status: string}) {

  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {

  }
}
