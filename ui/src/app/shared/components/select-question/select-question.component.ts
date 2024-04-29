import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-select-question',
  standalone: false,
  templateUrl: './select-question.component.html',
  styleUrl: './select-question.component.scss',
})
export class SelectQuestionComponent {
  @Input('detail') detail: FormGroup = new FormGroup({});

  constructor(private _questionSvc: QuestionService) {}

  public get options(): FormArray {
    return this.detail.get('options') as FormArray;
  }

  addOption() {
    this.options.push(this._questionSvc.createOption());
  }
}
