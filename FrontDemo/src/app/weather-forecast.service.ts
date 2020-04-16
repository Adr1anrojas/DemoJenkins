import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  url = 'https://localhost:4201/weatherforecast'
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }
}
