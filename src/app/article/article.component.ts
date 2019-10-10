import {
  Component,
  OnInit,
  Input,        // <-- added,
  HostBinding,
  Output,
  EventEmitter
} from '@angular/core';
import { Article } from './article.model'; // <-- added

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  @Output() flagMe : EventEmitter<Article>;
 
  
  constructor() {
    console.log("From the article constructor")
    this.flagMe = new EventEmitter();
   
   // console.log(this.appComp.articles);
    // article is populated by the Input now,
    // so we don't need anything here

  }

  //flagArticle() {
    //called service called flag article

    //in service function todo 
    //const downVote = this.myService.flagArticle(article, articleIndex)
    // this.articles[articleIndex].vote = downVote;
  //}

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  flagArticle()
  {
    
    console.log('this is from the Article class - flagIt method');

    this.flagMe.emit(this.article);
    
  }

  ngOnInit(){
    console.log("called from article init");
  }

  ngOnDestroy()
  {
    console.log("called from article destroy"); 
  }

  ngOnChange()
  {
    console.log("called from article onchange"); 
  }

}
