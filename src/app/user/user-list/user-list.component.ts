import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  users = [
    { id: 1, name: 'Gowtham' },
    { id: 2, name: 'Abhilash' },
    { id: 3, name: 'Devi' },
  ];

  constructor(private router: Router) {}

  trackById(index: number, user: any): number {
    return user.id;
  }

  viewDetails(userId: number): void {
    //whenever we click go to the user details page
    this.router.navigate(['/user', userId]);
  }

  
}
