import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from './weather-forecast.service';
import { WeatherForecast } from './models/weatherForecast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: WeatherForecast[] = [];
  title = 'FrontDemoPush';
  constructor(private service: WeatherForecastService) {
    this.service.getAll().subscribe((res: WeatherForecast[]) => { console.log(res); this.items = res });
    console.log("asdasd");

  }
  ngOnInit(): void {

  }
}
