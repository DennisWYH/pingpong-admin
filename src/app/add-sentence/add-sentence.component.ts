import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  ){}

  onSubmit(): void {
    // Process addSentence form data here
    console.warn("Your sentence has been submitted", this.addSentenceForm.value)
    this.addSentenceForm.reset();
  }
}
