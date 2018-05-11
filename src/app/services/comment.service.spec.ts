import {TestBed, inject, async} from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import {Comments} from '../models/Comments';
import { CommentService } from './comment.service';
import {HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('CommentService', () => {
  let commentService: CommentService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentService]
    });
    commentService = TestBed.get(CommentService);
  });

  it('should be created', inject([CommentService], (service: CommentService) => {
    expect(service).toBeTruthy();
  }));

  describe('postComment()', () => {
    it('should post the Comment from apiUrl', async(
      inject([HttpClient, HttpTestingController],
        (http: HttpClient, backend: HttpTestingController) => {
          //Arrange
          let expectedUrl = 'http://localhost:3000/comments';

          //Act
          commentService.addComment('allo').subscribe();

          //Assert
          backend.expectOne({
            url: expectedUrl,
            method: 'Post'
          });
        })));
});
}
