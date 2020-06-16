import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url = environment.URL;

  constructor(private http: HttpClient) { }

  public getValue(key: string): Observable<object | string> {
    return this.http.get(`${this.url}/api/search?key=${key}`)
      .pipe( catchError(this.handleError) );
  }

  private handleError(err: HttpErrorResponse): Observable<string> {
    let error = '';
    if (err.error instanceof ErrorEvent) {
      error = `Error: ${err.error.message}`;
    } else {
      error = `Message: ${err.error.text}`;
    }
    return throwError(error);
  }
}
