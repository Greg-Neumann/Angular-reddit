import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //
  articles: Array<Article> = [];
  //
  constructor() {
    this.articles = [
      new Article('Angular 🏂', 'https://Angular.io', 10),
      new Article('BBC News', 'https://bbc.co.uk/news', -5),
      new Article('Ionic Framework ⚛', 'https://ionicframework.com', 9),
    ];
  }
  //
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.warn(
      `About to add article with title ${title.value} and link ${link.value}`
    );
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
