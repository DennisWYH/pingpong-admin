import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpRequest } from '@angular/common/http';

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

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ){}

  sendDataToPingpongBackend(){
  
  }

  private chineseSentence: any;
  private response: any;
  onSubmit(): void {
    // Process addSentence form data here
    console.warn("Your sentence has been submitted", this.addSentenceForm.value);
    this.chineseSentence = this.addSentenceForm.value;
    // const headers = { 'content-type': 'application/json'}; 
    const body = JSON.stringify(this.chineseSentence);
    // For corss-domain requests, For cross-domain requests, 
    // setting the content type to anything other than application/x-www-form-urlencoded, 
    // multipart/form-data, or text/plain will trigger the browser to send a preflight OPTIONS request to the server.
    // https://stackoverflow.com/questions/25727306/request-header-field-access-control-allow-headers-is-not-allowed-by-access-contr
    this.http.post('http://localhost:8080/add-sentence', body, )
    .subscribe(
      response => {
        this.response = response;
      }
    )
  }

}
