import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UsersService, private router: Router) {}

  ErrorMsg:string='';

  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  userName: string = '';
  password: string = '';

  formDone(e: Event) {
    this.userService.getAllUsers().subscribe((response) => {

      const user = response.find((a: any) => {
        return a.userName === this.userName && a.password === this.password;
      });

      if (user)
      {
        this.userService.UserId?.next(user.id);
        this.userService.login(this.userName, this.password);

        if (this.isAdmin)
        {
          this.router.navigate(['/Students']);
        } else this.router.navigate(['/Home']);
        this.ErrorMsg='';
      }
      else {
        this.userForm.reset();
        this.ErrorMsg="Invalid username or password"
      }
    });
  }
  get isAdmin() {
    return this.userService.IsAdmin;
  }
}
