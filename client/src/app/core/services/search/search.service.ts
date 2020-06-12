import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url = environment.mockURL;
  private subject = new Subject();
  value = this.subject.asObservable();

  constructor(private http: HttpClient) { }

  getValue(key: string) {
    // this.subject.next(key);
    this.http.get(`${this.url}/find?key=${key}`).subscribe(result => {
      this.subject.next(result);
    });
  }
}
