import { Component } from '@angular/core';
import { Forecast } from './Forcast';
import { WeatherAPIService } from './weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherAPI';
  forecast: Forecast = {} as Forecast; 

  constructor(private kzooForcast: WeatherAPIService){
    this.kzooForcast.getSevenDayForcast().subscribe(
      (result) => {
        this.forecast = result.forecast;
      }
    )
  }
}
