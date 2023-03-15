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

  public sentences : any;

  ngOnInit() {
    // Below code is a Observer modle (as in Observerable and Observer model)
    // When it calls the subscribe() function, the Observerable will provide data to it
    // It gets the response data from Observerable and then pass the reponse to its variable this.sentences
    this.dataService.getData().subscribe(
      response => {
        this.sentences = response;
      }
    );
  }
}
