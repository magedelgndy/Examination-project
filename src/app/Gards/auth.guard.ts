import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _usersService: UsersService, private _router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let isLoggedIn = this._usersService.isLoggedin;
    if (isLoggedIn) {
      return true;
    } else {
      alert("Can't access!!");
      this._router.navigate(['/Login']);
      return false;
    }
  }
  isAdmin(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isAdmin = this._usersService.IsAdmin;
    if (isAdmin) {
      return true;
    } else {
      alert("you Aren't Admin!Access Denied");
      this._router.navigate(['/Home']);
      return false;
    }
  }
}
