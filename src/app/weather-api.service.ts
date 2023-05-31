import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SevenDayForcast } from './Forcast';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  url:string = "http://api.weatherapi.com/v1/forecast.json?";
  key: string = "b2fa7d7158ea4065860164531233105";
  zip:string = "49008"
  constructor(private http:HttpClient) { }
  
  getSevenDayForcast():Observable<SevenDayForcast>{
    return this.http.get<SevenDayForcast>(this.url + "key=" + this.key + "&q=" + this.zip + "&days=7&aqi=no&alerts=n");
  }
  
}
