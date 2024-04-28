import { Component, OnInit } from '@angular/core';
import { QuestionComponent } from '../../components/question/question.component';
import { Question } from '../../model/interfaces/question';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [QuestionComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  public form: FormGroup;

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

  onAddQuestion() {
    const question: FormGroup = this._fb.group({
      title: ['Question', Validators.required],
      description: [''],
    });

    this.questions.push(question);

    console.log(this.questions);
  }
}
