import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  //Navigate to home section
  login() {
    this.router.navigate(['home/tabs/tab1']);
  }

  //Navigate to registration page
  goToSignUp() {
    this.router.navigate(['register']);
  }

  ngOnInit() {
  }

}
