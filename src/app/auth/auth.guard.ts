import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authSevice.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }

  constructor(private authSevice: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authSevice.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
