import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements AfterViewInit{
  constructor(
    private elementRef: ElementRef,
    private dataService: DataService,
    private http: HttpClient,
   ){}
 
    // Have access to window.document object and set styles
    // https://stackoverflow.com/questions/46670795/how-to-change-whole-page-background-color-in-angular
    ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundImage = "url(./../../assets/icons/gradient-center-light-red-light-blue.png)";
  }

  ngOnInit(): void {
    this.getData();
  }

  public sentence : any;
  private response: any;

  getData() {
    // Currently the handler for any request with the endpoint '/' is providing a sentence
    // that is randomly selected in the db table of Chinese Sentence.
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", 1);
    this.sentence = this.http.get('https://pingpong-fun.herokuapp.com/getById', {params: queryParams})
      .subscribe(
        response => {
          this.sentence = response;
        }
      )
  }

  // onClickPrevious() {
  //   let queryParams = new HttpParams();
  //   queryParams = queryParams.append("id", this.sentence.id-1);
  //   this.http.get('https://pingpong-fun.herokuapp.com/getById', {params: queryParams})
  //   .subscribe(
  //     response => {
  //       this.sentence = response;
  //     }
  //   )  
  // }

  // onClickNext() {
  //   let queryParams = new HttpParams();
  //   queryParams = queryParams.append("id", this.sentence.id+1);
  //   this.http.get('https://pingpong-fun.herokuapp.com/getById', {params: queryParams})
  //   .subscribe(
  //     response => {
  //       this.sentence = response;
  //     }
  //   )  
  // }
  onClickPrevious() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", this.sentence.id-1);
    this.dataService.getSentenceById({params: queryParams}).subscribe(
      response => {
        this.sentence = response;
      }
    );  
  }

  onClickNext() {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", this.sentence.id+1);
    this.dataService.getSentenceById({params: queryParams}).subscribe(
      response => {
        this.sentence = response;
      }
    );  
  }
}
