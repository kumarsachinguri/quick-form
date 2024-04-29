import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    console.log(this.details);
  }

  addOption() {
    this.details.push(
      new FormGroup({
        options: new FormGroup({
          title: new FormControl('Option', Validators.required),
          description: new FormControl(''),
        }),
        order: new FormControl(0, Validators.required),
      })
    );
  }
}
