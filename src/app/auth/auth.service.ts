import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { AuthData } from './auth.model';
import { AngularFireAuth } from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthService {
  private isAuthenticated = false;
  authChanged = new Subject<boolean>();

  constructor(private router: Router, private afAuth: AngularFireAuth,public snackBar: MatSnackBar) {}

  login(authData: AuthData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        this.isAuthenticated = true;
        this.router.navigate(['/movies']);
        this.authChanged.next(true);
      })
      .catch(
        err => {
          this.snackBar.open(err.message, null, {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          })
        }
      )
  }

  isAuth() {
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
    this.authChanged.next(false);
    this.router.navigate(['/login']);
  }
}
