import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ServerComponent} from "./server-management/server/server.component";
import {FormsModule} from "@angular/forms";
import {ServersEditComponent} from './server-management/servers-edit/servers-edit.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import {GameControlComponent} from './events-game/game-control/game-control.component';
import {OddComponent} from './events-game/odd/odd.component';
import {EvenComponent} from './events-game/even/even.component';
import {BasicHighlightDirective} from "./highlight-directive/basic-highlight/basic-highlight.directive";
import {BetterHighlightDirective} from './highlight-directive/better-highlight/better-highlight.directive';
import {HeaderComponent} from './header/header.component';
import {ServerManagementComponent} from './server-management/server-management.component';
import {EventsGameComponent} from './events-game/events-game.component';
import {HighlightDirectiveComponent} from './highlight-directive/highlight-directive.component';
import {AccountManagementComponent} from './account-management/account-management.component';
import {AccountComponent} from "./account-management/account/account.component";
import {NewAccountComponent} from "./account-management/new-account/new-account.component";
import {AccountsService} from "./account-management/accounts.service";
import {LoggingService} from "./account-management/logging.service";
import { UserManagementComponent } from './user-management/user-management.component';
import { ActiveUsersComponent } from './user-management/active-users/active-users.component';
import { InactiveUsersComponent } from './user-management/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountManagementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    EvenComponent,
    EventsGameComponent,
    GameControlComponent,
    HeaderComponent,
    HighlightDirectiveComponent,
    NewAccountComponent,
    OddComponent,
    ServerComponent,
    ServersEditComponent,
    ServerManagementComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UserManagementComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
