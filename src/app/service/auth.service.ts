import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  login(user: any) {
    return this.http.post('http://localhost:9092/api/auth/login', user);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('userId') != null;
  }

  getuserId() {
    return localStorage.getItem('userId');
  }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['login']);
  }
  register(userForm: any) {
    return this.http.post('http://localhost:9092/api/auth/register', userForm);
  }
}
