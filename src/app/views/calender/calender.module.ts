import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {CalenderRoutingModule} from './calender-routing.module';
import {CalenderComponent} from './calender.component';


@NgModule({
  imports: [
    CalenderRoutingModule,
    ChartsModule
  ],
  declarations: [ CalenderComponent ]
})
export class CalenderModule { }
