import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display-sentence',
  templateUrl: './display-sentence.component.html',
  styleUrls: ['./display-sentence.component.css']
})
export class DisplaySentenceComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private http: HttpClient,
    ) {}

  ngOnInit(): void {
    this.sentences = this.dataService.getSentenceData();
    // this.getData();
  }

  public sentences : any;
  getData() {
    this.sentences = this.http.get('https://pingpong-fun.herokuapp.com/list-sentence')
      .subscribe(
        response => {
          this.sentences = response;
        }
      )
  }
}
