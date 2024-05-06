import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuestionType } from '../../model/enum/question-type';
import { KeyValuePipe } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { QuestionService } from '../../shared/services/question.service';
import { FormInput, FormInputComponent } from '../../shared/components/form-input/form-input.component';

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

  public formInputs: FormInput[] = [
    {
      containerClass: 'form-floating',
      type: 'text',
      id: 'form-title',
      name: 'form-title',
      class: 'form-control',
      label: 'Title',
      labelClass: 'form-label',
      formControlName: new FormControl('Untitled Form', Validators.required),
      placeHolder: 'Form title',
      validators: [],
    },
    {
      containerClass: 'form-floating',
      type: 'text',
      id: 'form-description',
      name: 'form-description',
      class: 'form-control',
      label: 'Description',
      labelClass: 'form-label',
      formControlName: new FormControl('', Validators.required),
      placeHolder: 'Form description',
      validators: [],
    },
  ];

  constructor(private _fb: FormBuilder, private _questionSvc: QuestionService) {
    // Create a new Form
    this.form = _fb.group({
      title: ['Untitled 1', Validators.required],
      description: [''],
      questions: _fb.array([] as FormGroup[]),
    });

  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(value => console.log(value))

  }

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
