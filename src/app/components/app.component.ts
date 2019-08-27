import { Component, OnInit } from '@angular/core';
import {APIRequestLocService} from '../services/apirequest-loc.service';
import {APIRequestWebService} from '../services/apirequest-web.service';
import {OWAPIHandler} from '../models/owapihandler';
import {WBAPIHandler} from '../models/wbapihandler';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { async } from 'q';
import { resolve } from 'url';
import { TableComponent} from './table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

constructor(private tableComponent: TableComponent) {

}

}
