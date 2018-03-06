import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {StatusComponent} from './status.component';
import {StatusRoutingModule} from './status-routing.module';


@NgModule({
  imports: [
      StatusRoutingModule,
    ChartsModule
  ],
  declarations: [ StatusComponent ]
})
export class StatusModule { }
