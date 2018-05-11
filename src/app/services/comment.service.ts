import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import {Comments} from '../models/Comments';

@Injectable()
export class CommentService {
  private apiUrl = 'http://localhost:3000/comments';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }

  addComment(body: string): Observable<Comments> {
    return this.http.post<Comments>(this.apiUrl, body, this.httpOptions) .pipe(
      catchError(this.handleError(new Comments))
    );
  }

  private handleError<T> (result?: T) {
    return (): Observable<T> => {
      // Retourner une réponse vide.
      return Observable.of(result as T);
    };
  }
}
