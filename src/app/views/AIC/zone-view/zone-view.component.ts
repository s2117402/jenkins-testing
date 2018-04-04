import { Component, OnInit } from '@angular/core';
import {RequestDataService} from '../../../services/request-data.service';

@Component({
  selector: 'app-zone-view',
  templateUrl: './zone-view.component.html',
  styleUrls: ['./zone-view.component.scss']
})
export class ZoneViewComponent implements OnInit {


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
