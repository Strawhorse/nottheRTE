import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../interfaces/news-response';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {

  // parameter comes from the environment.ts file, creates the base url of the news api to later append on the routes to it as below in the getTopStories method

  topHeadlines = environment.baseURL;

  constructor(private http: HttpClient) {}


  // method to return 10 news stories using the country code and api key as fields in the api call (and category) using string interpolation

  // returning an Observable of type NewsResponse
  getTopStories(country: string, category: string): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(
      this.topHeadlines +
        `?country=${country}&category=${category}&pageSize=10&apiKey=${environment.apiKey}`
    );
  }
}
