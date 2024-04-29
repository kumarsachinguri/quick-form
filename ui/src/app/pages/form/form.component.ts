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
import { QuestionService } from '../../shared/services/question.service';

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

  constructor(private _fb: FormBuilder, private _questionSvc: QuestionService) {
    // Create a new Form
    this.form = _fb.group({
      title: ['Untitled 1', Validators.required],
      description: [''],
      questions: _fb.array([] as FormGroup[]),
    });
  }

  ngOnInit(): void {}

  // Get all Questions in the Form
  public get questions(): FormArray {
    return this.form.controls['questions'] as FormArray;
  }

  // Get a single Question by @index
  public getQuestion(index: number): FormGroup {
    return this.questions.controls.at(index) as FormGroup;
  }

  // Adding new Questions in Form
  onAddQuestion(type: QuestionType) {
    let question: FormGroup = this._questionSvc.addQuestion(type);
    this.questions.push(question);
  }
}
