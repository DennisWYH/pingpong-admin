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
    this.getData();
  }

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
