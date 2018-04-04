// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Components
import {ZoneViewComponent} from'./zone-view/zone-view.component';

// Components Routing
import { AICRoutingModule } from './AIC-routing.module';
import { TenantsViewComponent } from './tenants-view/tenants-view.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      AICRoutingModule,
    ],
    declarations: [
        ZoneViewComponent,
        TenantsViewComponent
    ]
  })
  export class AICModule { }
  