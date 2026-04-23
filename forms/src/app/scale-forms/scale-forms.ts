import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-scale-forms',
  imports: [ReactiveFormsModule, RouterOutlet, CommonModule],
  templateUrl: './scale-forms.html',
  styleUrl: './scale-forms.css',
})
export class ScaleForms {
  form = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email])
  })
}
