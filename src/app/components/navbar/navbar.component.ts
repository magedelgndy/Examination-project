import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private _userService: UsersService) {}

  get getUserName() {
    return this._userService.currentUser?.userName;
  }
  get isLogged() {
    return this._userService.isLoggedin;
  }
  logout() {
    return this._userService.logout();
  }

  get isAdmin() {
    return this._userService.IsAdmin;
  }
}
