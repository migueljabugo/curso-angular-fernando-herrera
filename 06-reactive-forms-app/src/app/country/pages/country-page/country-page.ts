import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-page',
  imports: [
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './country-page.html',
})
export class CountryPage {

  fb = inject(FormBuilder);
  CountryService = inject(CountryService);

  regions = signal(this.CountryService.regions);

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });


 }
