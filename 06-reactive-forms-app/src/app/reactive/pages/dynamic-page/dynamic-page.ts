import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Form, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, minLength } from '@angular/forms/signals';
import { FormUtils } from '../../../utils/form-utils';

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

  formUtils = FormUtils;


  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
    [
      ['Metal Gear', Validators.required],
      ['Final Fantasy', Validators.required]
    ],
    Validators.minLength(2)
  )
  });

  newFavorite = this.fb.control('', Validators.required);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  addFavorite(){
    if (this.newFavorite.invalid) return;
    const newGame = this.newFavorite.value;
    this.favoriteGames.push(this.fb.control(newGame, Validators.required));

    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number){
    this.favoriteGames.removeAt(index);
  }



  onSave() {
    this.myForm.markAllAsTouched();
  }
}
