import { Component, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-question',
  standalone: false,
  templateUrl: './select-question.component.html',
  styleUrl: './select-question.component.scss',
})
export class SelectQuestionComponent {
  @Input('detail') detail: FormGroup = new FormGroup({});

  public get options(): FormArray {
    return this.detail.get('options') as FormArray;
  }

  addOption() {
    this.options.push(
      new FormGroup({
        title: new FormControl('Option', Validators.required),
        description: new FormControl(''),
      })
    );
  }
}
