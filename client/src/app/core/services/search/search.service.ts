import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url = environment.mockURL;

  constructor(private http: HttpClient) { }

  public getValue(key: string): Observable<object> {
    return this.http.get(`${this.url}/api/search?key=${key}`);
  }
}
