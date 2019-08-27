import { Injectable } from '@angular/core';
import {APIRequestLocService} from './apirequest-loc.service';
import {HttpClient} from '@angular/common/http';
import {Weather} from '../weather';
import {OWAPIHandler} from '../models/owapihandler';
import {WBAPIHandler} from '../models/wbapihandler';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class APIRequestWebService {
  // Attributes
  path: string;
  pathWB: string;
  tempPathOpenWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=';
  tempPathWeatherBit = 'https://api.weatherbit.io/v2.0/current?lat='; // add &lat=  and &lon=
  tempPath = 'https://api.darksky.net/forecast/';
  weatherBitAPIKey = 'bbba5260407e4e8893272cafa807e17d';
  key = '6a3312d11ff70a5e3f78c833ca7e80fa';
  key2 = '0ace7978b1195749dde2009d323ba947';

  // Constructor
  constructor(public apiLoc: APIRequestLocService, public http: HttpClient, public http2: HttpClient ) { }

  // Methods
  getAPIDataPathOW(ind: number): string {
    if (this.apiLoc.lat.length <= ind || this.apiLoc.lat.length <= ind) {
        return '';
    } else {
      return this.tempPathOpenWeather + this.apiLoc.lat[ind] + '&lon=' + this.apiLoc.lon[ind] + '&APPID=' + this.key;
    }
  }
  getAPIDataPathWB(ind: number): string {
    if (this.apiLoc.lat.length <= ind || this.apiLoc.lat.length <= ind) {
      return '';
  } else {
    return  this.tempPathWeatherBit  + this.apiLoc.lat[ind] + '&lon=' + this.apiLoc.lon[ind] + '&key=' + this.weatherBitAPIKey;
  }
  }
  getAPIDataOW(path: string): Observable<any> {
        return this.http.get(path);
  }
  getAPIDataWB(path: string): Observable<any> {
    return this.http2.get(path);
  }

  }

