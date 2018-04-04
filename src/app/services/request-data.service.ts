import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlService} from './url.service';
import {Headers} from '@angular/http';

@Injectable()
export class RequestDataService {

  constructor(
    private httpClient: HttpClient,
    private urlService: UrlService
  ) { }

  getTenant(){
    return this.httpClient.get(this.urlService.getTenants());
  }

}
