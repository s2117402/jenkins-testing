import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {TimelineComponent} from './timeline.component';
import {TimelineRoutingModule} from './timeline-routing.module';


@NgModule({
  imports: [
      TimelineRoutingModule,
    ChartsModule
  ],
  declarations: [ TimelineComponent ]
})
export class TimelineModule { }
