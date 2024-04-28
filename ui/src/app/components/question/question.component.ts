import { Component, Input } from '@angular/core';
import { Question, Text } from '../../model/interfaces/question';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  @Input('question') question: FormGroup = new FormGroup({});
  constructor() {
    this.question = this.question;
  }

}
