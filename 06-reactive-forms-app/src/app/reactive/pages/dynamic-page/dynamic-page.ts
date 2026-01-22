import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Form, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { minLength } from '@angular/forms/signals';

@Component({
  selector: 'app-dynamic-page',
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-page.html',
})
export class DynamicPage {

  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    name: ['', Validators.required, Validators.minLength(3)],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Final Fantasy', Validators.required]
    ],
    Validators.minLength(3)
  )
  });

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }


 }
