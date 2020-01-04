import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'arsalan';
  password = '123';
  errorFlag = false;
  error = 'Invalid credentials';
  constructor(private route: ActivatedRoute,
    private router: Router) {

    }

  ngOnInit() {
  }

  onSubmit() {
    if (this.username === 'arsalan' && this.password === '123') {
      this.errorFlag = false;
      this.router.navigate(['users']);
    }
    else {
      this.errorFlag = true;
    }
  }
}
