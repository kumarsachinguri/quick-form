import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-ranking-question',
  standalone: false,
  templateUrl: './ranking-question.component.html',
  styleUrl: './ranking-question.component.scss',
})
export class RankingQuestionComponent implements OnInit {
  @Input('details') details: FormArray<FormGroup> = new FormArray(
    [] as FormGroup[]
  );

  constructor(private _questionSvc: QuestionService) {}

  ngOnInit(): void {}

  addOption() {
    this.details.push(this._questionSvc.createRankingQuestion());
  }
}
