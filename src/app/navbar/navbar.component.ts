import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  auth: boolean;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth = this.authService.isAuth();
    this.authService.authChanged.subscribe(flag => {
      this.auth = flag;
    });
  }

  logout() {
    this.authService.logout();
  }
}
