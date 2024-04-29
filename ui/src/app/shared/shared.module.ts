// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question/question.component';
import { NestedQuestionComponent } from './components/nested-question/nested-question.component';
import { RatingQuestionComponent } from './components/rating-question/rating-question.component';
import { RankingQuestionComponent } from './components/ranking-question/ranking-question.component';
import { SelectQuestionComponent } from './components/select-question/select-question.component';
import { COMPONENT_A_TOKEN, COMPONENT_B_TOKEN } from './component.token';

@NgModule({
  declarations: [
    QuestionComponent,
    NestedQuestionComponent,
    RatingQuestionComponent,
    RankingQuestionComponent,
    SelectQuestionComponent
  ],
  imports: [CommonModule],
  providers: [
    { provide: COMPONENT_A_TOKEN, useValue: QuestionComponent },
    { provide: COMPONENT_B_TOKEN, useValue: NestedQuestionComponent },
  ],
  exports: [
    QuestionComponent,
    NestedQuestionComponent,
    RatingQuestionComponent,
    RankingQuestionComponent,
    SelectQuestionComponent
  ],
})
export class SharedModule {}
