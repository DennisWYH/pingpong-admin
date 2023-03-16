import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface ChineseSentence {
    id: number,
    chinese: string,
    englishTranslation: string,
    difficultyLevel: string,
    pinyin: any;
}

@Injectable(
  { providedIn: 'root' }
)
export class DataService {
  private sentences: any
  private dataUrl = 'https://pingpong-fun.herokuapp.com';
  // private dataUrl = 'localhost:8080/list-sentence';  // URL to localhost backend on my laptop
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ){}

  // Angular observerable documentation
  // https://angular.io/guide/observables
  getSentencesData() {
    return this.http.get(this.dataUrl + "/list-sentence");
  }

  postAddSentence(body:any) {
    return this.http.post(this.dataUrl + '/add-sentence', body, )   
  }
}