import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { QuestionType } from '../../../model/enum/question-type';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-nested-question',
  standalone: false,
  templateUrl: './nested-question.component.html',
  styleUrl: './nested-question.component.scss',
})
export class NestedQuestionComponent implements OnInit {
  @Input('questions') questions: FormArray<FormGroup> = new FormArray(
    [] as FormGroup[]
  );

  public questionTypes: typeof QuestionType = QuestionType;

  constructor(private _questionSvc: QuestionService) {}

  ngOnInit(): void {}

  // Add new Question in the Survey of @type
  onAddQuestion(type: QuestionType) {
    let question = this._questionSvc.addQuestion(type);
    this.questions.push(question);
  }
}
