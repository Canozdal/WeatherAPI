import { Injectable, OnInit } from '@angular/core';
import { City} from '../models/city';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import data from 'cities.json' ;
import { NgForOf } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class APIRequestLocService {
  // tslint:disable-next-line: no-inferrable-types

  cities: City[];
  lat = new Array();
  lon = new Array();
  name = new Array<string>();
  constructor(public http: HttpClient) {
    this.handleCoordinates();
  }
  handleCoordinates() {
    for (let i = 0; i < data.length; i++) {
      this.lat.push(data[i].latitude);
      this.lon.push(data[i].longitude);
      this.name.push(data[i].name);
    }
  }
}
