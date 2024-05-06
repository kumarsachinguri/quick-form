import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../../services/question.service';
import { FormInput } from '../form-input/form-input.component';

@Component({
  selector: 'app-ranking-question',
  templateUrl: './ranking-question.component.html',
  styleUrl: './ranking-question.component.scss',
})
export class RankingQuestionComponent implements OnInit {
  @Input('details') details: FormArray<FormGroup> = new FormArray(
    [] as FormGroup[]
  );

  public formInput: FormInput = {
    type: 'text',
    id: 'option-ranking',
    class: 'form-control',
    labelClass: 'form-label',
    formControlName: new FormControl('Option', Validators.required),
    placeHolder: 'Option',
  };

  constructor(private _questionSvc: QuestionService) {}

  ngOnInit(): void {}

  addOption() {
    this.details.push(this._questionSvc.createRankingQuestion());
  }
}
