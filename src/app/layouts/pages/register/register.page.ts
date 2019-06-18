import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }

  //Navigate to login page
  backToLogin() {
    this.router.navigate(['']);
  }

  //Resgister user
  register() {
    this.router.navigate(['input-otp']);
  }


  ngOnInit() {
  }

}
