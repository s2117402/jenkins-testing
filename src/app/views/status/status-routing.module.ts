import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';
import {StatusComponent} from './status.component';


const routes: Routes = [
  {
    path: '',
    component: StatusComponent,
    data: {
      title: 'Status'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule {}
