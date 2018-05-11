import {async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import {CommentService} from '../services/comment.service';
import { PostCommentComponent } from './post-comment.component';
import {Comments} from '../models/Comments';
import {Observable} from 'rxjs/Observable';

describe('PostCommentComponent', () => {
  let component: PostCommentComponent;
  let fixture: ComponentFixture<PostCommentComponent>;
  let commentService: CommentService;
  let comments: Comments;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should get Comment from Comments', fakeAsync(() => {
      //Arrange
      spyOn(commentService, 'addComment').and.returnValue(Observable.of([comments]));
      tick();

      //Act
      component.ngOnInit();
      tick();

      //Assert
      expect(commentService.addComment).toHaveBeenCalled();
    }));
});
