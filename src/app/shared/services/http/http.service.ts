import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<Object> {
    return Observable.create(observer => {
      this.http.get(url).subscribe(
        response => {
          observer.next(response);
          observer.complete();
        }, error => {
          this.errorHandling(error);
        });
    });
  }

  errorHandling(error: any) {
    console.log('Request error: ', error);
  }
}
