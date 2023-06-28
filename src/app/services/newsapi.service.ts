import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../interfaces/news-response';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  topHeadlines = environment.baseURL;

  constructor(private http: HttpClient) {}

  // method to return 10 news stories using the country code and api key as fields in the api call

  getTopStories(country: string, category: string): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(
      this.topHeadlines +
        `?country=${country}&category=${category}&pageSize=10&apiKey=${environment.apiKey}`
    );
  }
}
