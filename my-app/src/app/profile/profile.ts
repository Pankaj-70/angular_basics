import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name = 'Pankaj';
  role = 'Angular Developer & BA'
  resetButton() {
    console.log("hey")
    this.name='Pankaj';
  }
}
