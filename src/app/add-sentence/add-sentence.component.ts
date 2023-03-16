import { Component, Output, EventEmitter } from '@angular/core';
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
    this.chineseSentence = this.addSentenceForm.value;
    this.chineseSentence.difficultyLevel = levelInNumber;
    const body = JSON.stringify(this.chineseSentence);
    
    // Subscribe to the Observerable defined in dataService.
    this.dataService.postAddSentence(body).subscribe(
      response => {
        this.response = response;
      }
    );
  }

  // Notify admin.component, and then admin.component notify display-sentence.component to update the display
  @Output() newSentenceEvent = new EventEmitter<string>();
  onAddNewSentence() {
    this.newSentenceEvent.emit();
  }
}
