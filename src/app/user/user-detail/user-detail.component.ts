import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  [x: string]: any;
  userId: number | null = null;
  userDetails: {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    role: string;
  } | null = null;

  //user data
  private mockUserData = [
    {
      id: 1,
      name: 'Gowtham',
      email: 'gowtham@example.com',
      phone: '123456789',
      address: 'hyderabad',
      role: 'Senior developer',
    },
    {
      id: 2,
      name: 'Abhilash',
      email: 'abhilash@example.com',
      phone: '9876528821',
      address: 'Vizag',
      role: 'Frontend developer',
    },
    {
      id: 3,
      name: 'Devi',
      email: 'Devi@example.com',
      phone: '9982675012',
      address: 'Andhra pradesh',
      role: 'Backend developer',
    },
  ];


  constructor(private route: ActivatedRoute,private location:Location) {}

  ngOnInit(): void {
    // Fetch the user id from route parameters
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    // Find user details based on the user id
    this.userDetails = this.mockUserData.find(
      (user) => user.id === this.userId
    ) || null;
    
  }
  //this mechod is used to move to the previous page
  goBack(): void {
    this.location.back();
  }
  
}
