import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { Education } from './education/education';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, Education, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}

