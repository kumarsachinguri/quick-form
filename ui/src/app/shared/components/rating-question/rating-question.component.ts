import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInput } from '../form-input/form-input.component';

@Component({
  selector: 'app-rating-question',
  templateUrl: './rating-question.component.html',
  styleUrl: './rating-question.component.scss',
})
export class RatingQuestionComponent {
  @Input('detail') detail: FormGroup = new FormGroup({});

  public formInputs: FormInput[] = [
    {
      type: 'number',
      id: 'min',
      class: 'form-control',
      labelClass: 'form-label',
      formControlName: new FormControl(0, Validators.required),
    },
    {
      type: 'number',
      id: 'max',
      class: 'form-control',
      labelClass: 'form-label',
      formControlName: new FormControl(5, Validators.required),
    },
  ];
}
