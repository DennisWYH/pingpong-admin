import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';

@Injectable({ providedIn: 'root' })
export class DataService {

//   private dataUrl = 'https://pingpong-fun.herokuapp.com/previous';  // URL to current backend Go demo app in heroku
  private dataUrl = 'localhost:8080/list-sentence';  // URL to localhost backend on my laptop

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET sentence data from the pingpong backend */
  getSentenceData(): Observable<string> {
    return this.http.get<string>(this.dataUrl)
      .pipe(
      );
  }

}