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
      new Article('Angular', 'http://angular.io', Math.ceil(Math.random() * 10),'administrator'),
      new Article('Fullstack', 'http://fullstack.io', Math.ceil(Math.random() * 10),'user'),
      new Article('Amazon', 'https://www.amazon.com', Math.ceil(Math.random() * 10),'user'),
      new Article('D2L', 'https://d2l.depaul.edu', Math.ceil(Math.random() * 10),'administrator')      
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement,userType:HTMLSelectElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value} and userRole: ${userType.value}`);
    this.articles.push(new Article(title.value, link.value, 0,userType.value));
    title.value = '';
    link.value = '';
    userType.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  flagThisArticle(article:Article){

    console.log("from flagThisArticle");

    let articles:Article[];
    let vote:number;

    this.articles =this.sortedArticles();
    vote = this.articles[this.articles.length - 1].votes ;
    vote-- ;
    article.votes = vote; 
  }
  
  ngOnInit(){
    console.log("called from init");
  }

  ngOnDestroy()
  {
    console.log("called from destroy"); 
  }
}
