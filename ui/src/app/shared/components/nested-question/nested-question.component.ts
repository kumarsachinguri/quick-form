import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionType } from '../../../model/enum/question-type';

@Component({
  selector: 'app-nested-question',
  standalone: false,
  templateUrl: './nested-question.component.html',
  styleUrl: './nested-question.component.scss',
})
export class NestedQuestionComponent {
  @Input('questions') questions: FormArray<FormGroup> = new FormArray(
    [] as FormGroup[]
  );

  public questionTypes: typeof QuestionType = QuestionType;

  constructor(private _fb: FormBuilder) {}

  onAddQuestion(type: QuestionType) {
    let question: FormGroup = this._fb.group({
      order: [0, Validators.required],
      title: ['Question', Validators.required],
      description: [''],
      createdDate: [new Date(), Validators.required],
      type: [type, Validators.required],
    });

    let details;
    switch (type) {
      case QuestionType.Select:
        details = this._fb.group({
          options: this._fb.array([
            this._fb.group({
              title: ['Option 1', Validators.required],
              description: [''],
            }),
            this._fb.group({
              title: ['Option 2', Validators.required],
              description: [''],
            }),
          ]),
          multiple: [false, Validators.required],
          list: [true, Validators.required],
        });
        break;
      case QuestionType.Nested:
        details = this._fb.array([
          this._fb.group({
            order: [0, Validators.required],
            title: ['Question', Validators.required],
            description: [''],
            createdDate: [new Date(), Validators.required],
            type: [QuestionType.Text, Validators.required],
          }),
        ]);
        break;
      case QuestionType.Ranking:
        details = this._fb.array([
          this._fb.group({
            options: this._fb.group({
              title: ['Option 1', Validators.required],
              description: [''],
            }),
            order: [0, Validators.required],
          }),
        ]);
        break;
      case QuestionType.Rating:
        details = this._fb.group({
          min: [0, Validators.required],
          max: [5, Validators.required],
          type: ['Number', Validators.required],
        });
        break;
      default:
        details = undefined;
    }

    if (details) {
      question.addControl('details', details);
    }

    this.questions.push(question);

    console.log(this.questions.value);
  }
}
