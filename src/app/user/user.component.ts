import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getUserEmail() {
    return localStorage.getItem('email');
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigateByUrl('/');
  }

}
