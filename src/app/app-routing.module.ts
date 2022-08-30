import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./server-routing/home/home.component";
import {UsersComponent} from "./server-routing/users/users.component";
import {UserComponent} from "./server-routing/users/user/user.component";
import {ServersComponent} from "./server-routing/servers/servers.component";
import {RoutingServerComponent} from "./server-routing/servers/servers/routing-server/routing-server.component";
import {EditServerComponent} from "./server-routing/servers/servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./server-routing/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateGuard} from "./server-routing/servers/servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./server-routing/error-page/error-page.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ] },
  { path: 'servers', canActivateChild: [AuthGuardService], component: ServersComponent, children: [
      { path: ':id', component: RoutingServerComponent },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
  { path: 'login', redirectTo: 'servers'},
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data:{message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
