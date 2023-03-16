import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
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
  @Input() refreshPage = false;

  ngOnInit() {
    // Below code is a Observer modle (as in Observerable and Observer model)
    // When it calls the subscribe() function, the Observerable will provide data to it
    // It gets the response data from Observerable and then pass the reponse to its variable this.sentences
    this.dataService.getSentencesData().subscribe(
      response => {
        this.sentences = response;
      }
    );
  }

  ngOnChanges() {
    if (this.refreshPage == true) {
      this.dataService.getSentencesData().subscribe(
        response => {
          this.sentences = response;
        }
      );  
    }
  }

  onRemoveSentence(id: string) {
    console.log("id of the sentence to be removed is...", id);
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", id);
    this.dataService.postRemoveSentence(queryParams).subscribe(
      response => {
        // this.sentences = response;
      }
    );  

  }
}
