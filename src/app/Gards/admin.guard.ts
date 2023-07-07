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
export class AdminGuard implements CanActivate {
  constructor(private _usersService: UsersService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
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
