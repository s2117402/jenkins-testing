import { Component, OnInit } from '@angular/core';
import {RequestDataService} from '../../services/request-data.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  allZones = [];
    constructor(
    private requestDataService: RequestDataService
  ) { }


  ngOnInit() {
      this.requestDataService.getTenant().subscribe(res=> {
        this.allZones = res['zones'];
        console.log(this.allZones);
      })
  }

}
