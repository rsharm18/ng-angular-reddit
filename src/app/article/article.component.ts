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

  @Output() flagArticle : EventEmitter<Article>;
 
  constructor() {
    this.flagArticle = new EventEmitter();
    // article is populated by the Input now,
    // so we don't need anything here

  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  flagIt()
  {
    
    console.log('this is from the Article class - flagIt method');

    this.flagArticle.emit(this.article);
    
  }

  ngOnInit() {
  }

}
