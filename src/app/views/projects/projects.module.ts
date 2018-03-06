import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {ProjectsComponent} from './projects.component';
import {ProjectsRoutingModule} from './projects-routing.module';


@NgModule({
  imports: [
      ProjectsRoutingModule,
    ChartsModule
  ],
  declarations: [ ProjectsComponent ]
})
export class ProjectsModule { }
