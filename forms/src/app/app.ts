import { CommonModule, JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ScaleForms } from './scale-forms/scale-forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule, ScaleForms, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
  name = "";
  email = "";
  hobby = new FormControl('');
  showUser = false;
  showDetails() {
    if (this.name && this.email) {
      this.showUser = true;
    } else {
      this.showUser = false;
    }
  }
}
