import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: false,
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  @Input('question') question: FormGroup = new FormGroup({});
  constructor() {
    this.question = this.question;
  }

  public get childQuestions() {
    return this.question.get('details')?.value as FormArray;
  }
}
