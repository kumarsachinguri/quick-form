import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface FormInput {
  label?: string;
  labelClass: string;
  formControlName: FormControl;
  placeHolder?: string;
  id?: string;
  name?: string;
  class: string;
  containerClass?: string;
  type: string;
  validators?: Validators[];
}

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent implements OnInit {
  @Input('formInput') public formInput: FormInput = {
    label: '',
    labelClass: '',
    formControlName: new FormControl(),
    placeHolder: '',
    id: '',
    name: '',
    class: '',
    containerClass: '',
    type: 'text',
    validators: [],
  };

  ngOnInit(): void {
    this.formInput.id = this.formInput.id + Math.random().toString();
  }
}
