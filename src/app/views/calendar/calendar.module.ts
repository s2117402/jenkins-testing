import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CalendarRoutingModule} from './calendar-routing.module';
import {CalendarComponent} from './calendar.component';


@NgModule({
  imports: [
    CalendarRoutingModule,
    ChartsModule
  ],
  declarations: [ CalendarComponent ]
})
export class CalendarModule { }
