import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ZoneViewComponent} from'./zone-view/zone-view.component';
import {TenantsViewComponent} from './tenants-view/tenants-view.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'AIC'
    },
    children: [
      {
        path: 'zones',
        component: ZoneViewComponent,
        data: {
          title: 'Zones'
        }
      },
      {
        path: 'tenants',
        component: TenantsViewComponent,
        data: {
          title: 'Tenants'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AICRoutingModule {}
