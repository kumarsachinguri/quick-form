import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInput } from '../form-input/form-input.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements OnInit {
  @Input('question') question: FormGroup = new FormGroup({});

  public formInputs: FormInput[] = [
    {
      type: 'text',
      id: 'question-title',
      name: 'question-title',
      class: 'form-control',
      labelClass: 'form-label',
      formControlName: new FormControl('Question', Validators.required),
      placeHolder: 'Question title',
    },
    {
      type: 'text',
      id: 'question-description',
      name: 'question-description',
      class: 'form-control',
      labelClass: 'form-label',
      formControlName: new FormControl('', Validators.required),
      placeHolder: 'Question description',
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  public get details(): FormArray {
    return this.question.get('details') as FormArray;
  }

  public get detail(): FormGroup {
    return this.question.get('details') as FormGroup;
  }
}
