import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

import { Hero } from '../hero';


export interface ChineseSentence {
  chinese: string;
  englishTranslation: string,
  difficultyLevel: string,
  pinyin: any;
}


@Component({
  selector: 'app-display-sentence',
  templateUrl: './display-sentence.component.html',
  styleUrls: ['./display-sentence.component.css']
})
export class DisplaySentenceComponent implements OnInit {
  ChineseSentence!: { chinese: string; englishTranslation: string; difficultyLevel: string; pinyin: any; };
  constructor(
    private dataService: DataService,
    private http: HttpClient,
    ) {}

  ngOnInit(): void {
    this.getData();
  }

  // getData(): void {
  //   this.dataService.getSentenceData()
  //   .subscribe((data: ChineseSentence) => this.ChineseSentence = {
  //     chinese: data.chinese,
  //     englishTranslation: data.englishTranslation,
  //     difficultyLevel: data.difficultyLevel,
  //     pinyin: data.pinyin,
  //   }
  //   );
  // }
  public sentences : any;
  getData() {
    this.sentences = this.http.get('http://localhost:8080/list-sentence')
      .subscribe(
        response => {
          this.sentences = response;
        }
      )
  }
}
