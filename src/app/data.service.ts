import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';

@Injectable({ providedIn: 'root' })
export class DataService {

  private dataUrl = 'https://pingpong-fun.herokuapp.com/previous';  // URL to current backend Go demo app in heroku

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET data from the server */
  getData(): Observable<string> {
    return this.http.get<string>(this.dataUrl)
      .pipe(
      );
  }

}