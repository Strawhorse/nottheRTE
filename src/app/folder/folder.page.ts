import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { map } from 'rxjs';
import { ArticlesEntity } from '../interfaces/news-response';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  public folder!: string;
  newsList?: ArticlesEntity[];
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsApiService: NewsapiService
    ) 
    {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  // function to add the news service
  getTopHeadlines() {
    this.newsApiService.getTopStories('ie', this.folder)
    .pipe(map((res) => res.articles)) 
    .subscribe((news) => (this.newsList = news));
  }

}
