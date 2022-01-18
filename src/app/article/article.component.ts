import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  //
  // Use HostBinding to set the class of this component to 'row'. THis is the same
  // as writing <app-article class="row"> without this HostBinding stmt
  //
  @HostBinding('attr.class') cssClass = 'row';
  //
  // In the following @Input, the passed property - article - is an Array set in the caller
  // This default assignment is needed to ensure that the TS compiles with no null value
  // but, in effect, this next line is not executed to replace the caller's values
  @Input() article: Article = new Article('', ''); // default value
  //
  voteUp(): boolean {
    this.article.voteUp();
    //
    // return false to stop propagation of the form's click event (as the URL
    // does not yet exist)
    //
    return false;
  }
  voteDown() {
    this.article.voteDown();
    return false;
  }
  ngOnInit(): void {}
}
