import { Injectable } from '@angular/core';
import { QuestionType } from '../../model/enum/question-type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private _fb: FormBuilder) {}

  // Add a new Question of @questionType
  public addQuestion(questionType: QuestionType): FormGroup {
    let question: FormGroup = this.createQuestion(questionType);

    let details;

    switch (questionType) {
      // Create details for @Select type questions
      case QuestionType.Select:
        details = this.createSelectQuestion();
        break;
      // Create details for @Nested type questions
      case QuestionType.Nested:
        details = this._fb.array([this.createQuestion(QuestionType.Text)]);
        break;
      // Create details for @Ranking type questions
      case QuestionType.Ranking:
        details = this._fb.array([this.createRankingQuestion()]);
        break;
      // Create details for @Rating type questions
      case QuestionType.Rating:
        details = this.createRatingQuestion();
        break;
      // Create details for @Text type questions
      default:
        details = undefined;
    }

    if (details) question.addControl('details', details);
    return question;
  }

  // Create a new Question of @questionType
  public createQuestion(questionType: QuestionType): FormGroup {
    return this._fb.group({
      order: [0, Validators.required],
      title: ['Question', Validators.required],
      description: [''],
      createdDate: [new Date(), Validators.required],
      type: [questionType, Validators.required],
    });
  }

  // Create a new FormGroup for @Select type questions
  public createSelectQuestion(): FormGroup {
    return this._fb.group({
      options: this._fb.array([this.createOption(), this.createOption()]),
      multiple: [false, Validators.required],
      list: [true, Validators.required],
    });
  }

  // Create a new FormGroup for @Ranking type questions
  public createRankingQuestion(): FormGroup {
    return this._fb.group({
      options: this.createOption(),
      order: [0, Validators.required],
    });
  }

  // Create a new FormGroup for @Rating type questions
  public createRatingQuestion(): FormGroup {
    return this._fb.group({
      min: [0, Validators.required],
      max: [5, Validators.required],
      type: ['Number', Validators.required],
    });
  }

  // Create a new FormGroup for Options
  public createOption(): FormGroup {
    return this._fb.group({
      title: ['Option 1', Validators.required],
      description: [''],
    });
  }
}
