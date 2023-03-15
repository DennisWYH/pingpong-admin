import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { DisplaySentenceComponent } from '../display-sentence/display-sentence.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-sentence',
  templateUrl: './add-sentence.component.html',
  styleUrls: ['./add-sentence.component.css']
})
export class AddSentenceComponent {
  addSentenceForm = this.formBuilder.group({
    chinese: '',
    pinyin: '',
    englishTranslation: '',
    difficultyLevel: '',
  });
  chineseSentence: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dataService: DataService,
  ){}

  private response: any;

  difficultyLevelNameToNumber(): number{
    switch (this.addSentenceForm.value.difficultyLevel) {
      case 'black':
        return 1
      case 'blue':
        return 2
      case 'orange':
        return 3
      case 'yellow':
        return 4
      case 'mint':
        return 5
      case 'pink':
        return 6
      default:
        return 1
    }
  }

  onSubmit(): void {
    // Form fields validation
    // Switch level name to number
    var levelInNumber = this.difficultyLevelNameToNumber()
    // Process addSentence form data here
    console.warn("Your sentence has been submitted", this.addSentenceForm.value);
    this.chineseSentence = this.addSentenceForm.value;
    this.chineseSentence.difficultyLevel = levelInNumber;
    // const headers = { 'content-type': 'application/json'}; 
    const body = JSON.stringify(this.chineseSentence);
    // For corss-domain requests, For cross-domain requests, 
    // setting the content type to anything other than application/x-www-form-urlencoded, 
    // multipart/form-data, or text/plain will trigger the browser to send a preflight OPTIONS request to the server.
    // https://stackoverflow.com/questions/25727306/request-header-field-access-control-allow-headers-is-not-allowed-by-access-contr
    this.http.post('https://pingpong-fun.herokuapp.com/add-sentence', body, )
    .subscribe(
      response => {
        this.response = response;
      }
    )
    // location.reload();
    this.dataService.getData().subscribe();
  }

  }
