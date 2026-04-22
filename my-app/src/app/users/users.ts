import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users = ['Ram', 'Vin', 'Rachel', 'Zurich'];
  showUsers =  true;
  toggleUsers() {
    this.showUsers = !this.showUsers;
  }
}
