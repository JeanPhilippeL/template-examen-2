import { Component, OnInit } from '@angular/core';
import {Comments} from '../models/Comments';
import {CommentService} from '../services/comment.service';
@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
  comment: Comments;
  empty: boolean = true;
  textValue: string = '';

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }

  textAreaEmpty(body: string) {
    if (body === '') {
      console.log('Vide');
      this.empty = true;
    }else{
      console.log(body);
      this.empty = false;
    }

  }
  private sendComment(body: string) {
    console.log(body);
    this.commentService.addComment('body').subscribe(
      comment => this.comment = comment
    );
  }
}
