import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: false,
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements OnInit {
  @Input('question') question: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {}

  public get details(): FormArray {
    return this.question.get('details') as FormArray;
  }

  public get detail(): FormGroup {
    return this.question.get('details') as FormGroup;
  }
}
