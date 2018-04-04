import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {ProjectsComponent} from './projects.component';
import {ProjectsRoutingModule} from './projects-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    ProjectsRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ ProjectsComponent ]
})
export class ProjectsModule { }
