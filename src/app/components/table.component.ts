import { Component, OnInit } from '@angular/core';
import {APIRequestLocService} from '../services/apirequest-loc.service';
import {APIRequestWebService} from '../services/apirequest-web.service';
import {OWAPIHandler} from '../models/owapihandler';
import {WBAPIHandler} from '../models/wbapihandler';
import { Subscription, Observable, forkJoin } from 'rxjs';
import { async } from 'q';
import { resolve } from 'url';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  title = 'WeatherAPI';
  temperatureWB: number;
  owApi: OWAPIHandler;
  wbApi: WBAPIHandler;
  numOfCities = 81;
  owApiTemps = new Array<number>();
  wbApiTemps = new Array<number>();
  num: number;
  subscription: Subscription;
  p: Promise<any>;
  fetchPromise;
  obs = new Array<Observable<any>>();
  cities = new Array<string>();
  constructor(
     private webAPI: APIRequestWebService,
     private locAPI: APIRequestLocService
    ) { }

   ngOnInit() {
    for (let x = 0; x < this.numOfCities; x++) {
      this.cities.push(this.locAPI.name[x]);
    }

    try {
      this.generateTablesPromise();
     } catch (err) {
       console.log(err);
     }
  }

   generateTablesPromise() {
     for (let i = 0; i < this.numOfCities; i++) {
        fetch(this.webAPI.getAPIDataPathOW(i))
        .then(data => {

          return data.json();
        })
        .then(data => {
          this.owApi = data;

          this.owApiTemps.push(this.owApi.main.temp);
          }
        ).catch(err => console.log(err));
         }
     for (let j = 0; j < this.numOfCities; j++) {
          fetch(this.webAPI.getAPIDataPathWB(j))
          .then(data => {
            return data.json();
          })
          .then(data => {
            this.wbApi = data;

            this.wbApiTemps.push(this.wbApi.data[0].temp);
            }
          ).catch(err => console.log(err));
           }
   }

}
