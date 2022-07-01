import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage: string = '';
  userForm = {
    username: '',
    password: '',
    img: '',
  };
  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit(): void {}


  isValid() {
    return this.errorMessage === '';
  }

  register() {
    this.authService.register(this.userForm).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
