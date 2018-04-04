import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

// Services
import {CanActivateViaAuthGuardService} from './services/can-activate-via-auth-guard.service';

// Components
import { LoginComponent } from './components/app-sidebar-form/login/login.component';
import {TimelineComponent} from './views/timeline/timeline.component';
import {StatusComponent} from './views/status/status.component';
import {NopermitComponent} from './views/nopermit/nopermit.component';
import {CalendarComponent} from './views/calendar/calendar.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'AIC',
        loadChildren: './views/AIC/AIC.module#AICModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'projects',
        loadChildren: './views/projects/projects.module#ProjectsModule',
      },
      {
        path: 'calendar',
        loadChildren: './views/calendar/calendar.module#CalendarModule',
      },
      {
        path: 'timeline',
        loadChildren: './views/timeline/timeline.module#TimelineModule'
      },{
        path: 'status',
        loadChildren: './views/status/status.module#StatusModule',
        canActivate: [CanActivateViaAuthGuardService]
      },
      {
        path: 'nopermit',
        component: NopermitComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
