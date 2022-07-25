import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from "./server-management/server/server.component";
import { FormsModule } from "@angular/forms";
import { ServersEditComponent } from './server-management/servers-edit/servers-edit.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { GameControlComponent } from './events-game/game-control/game-control.component';
import { OddComponent } from './events-game/odd/odd.component';
import { EvenComponent } from './events-game/even/even.component';
import { BasicHighlightDirective } from "./highlight-directive/basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './highlight-directive/better-highlight/better-highlight.directive';
import { HeaderComponent } from './header/header.component';
import { ServerManagementComponent } from './server-management/server-management.component';
import { EventsGameComponent } from './events-game/events-game.component';
import { HighlightDirectiveComponent } from './highlight-directive/highlight-directive.component';
import { AccountManagementComponent } from './account-management/account-management.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersEditComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HeaderComponent,
    ServerManagementComponent,
    EventsGameComponent,
    HighlightDirectiveComponent,
    AccountManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
