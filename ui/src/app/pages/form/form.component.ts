import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuestionType } from '../../model/enum/question-type';
import { KeyValuePipe } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, KeyValuePipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public questionTypes: typeof QuestionType = QuestionType;

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      title: ['Untitled 1', Validators.required],
      description: [''],
      questions: _fb.array([] as FormGroup[]),
    });
  }

  ngOnInit(): void {}

  public get questions(): FormArray {
    return this.form.controls['questions'] as FormArray;
  }

  public getQuestion(index: number): FormGroup {
    return this.questions.controls.at(index) as FormGroup;
  }

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
