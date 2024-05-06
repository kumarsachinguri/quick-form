import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../../services/question.service';
import { FormInput } from '../form-input/form-input.component';

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrl: './select-question.component.scss',
})
export class SelectQuestionComponent {
  @Input('detail') detail: FormGroup = new FormGroup({});

  public formInputs: FormInput[] = [
    {
      containerClass: 'form-check',
      type: 'checkbox',
      id: 'multiple',
      class: 'form-check-input',
      label: 'Multiple',
      labelClass: 'form-check-label',
      formControlName: new FormControl(0, Validators.required),
    },
    {
      containerClass: 'form-check',
      type: 'checkbox',
      id: 'list-view',
      class: 'form-check-input',
      label: 'List View',
      labelClass: 'form-check-label',
      formControlName: new FormControl(5, Validators.required),
    },
  ];

  constructor(private _questionSvc: QuestionService) {}

  public get options(): FormArray {
    return this.detail.get('options') as FormArray;
  }

  addOption() {
    this.options.push(this._questionSvc.createOption());
  }
}
