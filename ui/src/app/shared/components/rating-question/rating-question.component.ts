import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating-question',
  standalone: false,
  templateUrl: './rating-question.component.html',
  styleUrl: './rating-question.component.scss'
})
export class RatingQuestionComponent {

  @Input('detail') detail: FormGroup = new FormGroup({});

}
