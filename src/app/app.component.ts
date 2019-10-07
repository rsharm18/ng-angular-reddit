import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3,'administrator'),
      new Article('Fullstack', 'http://fullstack.io', 2,),
      new Article('Angular Homepage', 'http://angular.io', 1,'user')
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  // flagArticle(article:Article){
  //   //console.log('This is Test');
  //   // let articles:Article[];
  //   // let vote:number;

  //   // articles = this.sortedArticles();
  //   // vote = articles[articles.length - 1].votes ;
  //   // vote-- ;
  //   // article.votes = vote;
  // }
}
