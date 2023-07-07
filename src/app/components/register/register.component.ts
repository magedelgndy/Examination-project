import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  users: any;

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {}

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    userName: new FormControl('', [Validators.required,Validators.minLength(10)]),
    password: new FormControl('', [Validators.required,Validators.minLength(7)
      ,Validators.pattern(/^[A-Z]+[a-z0-9]+$/)]),
    Repassword: new FormControl('', [Validators.required]),
  },
  {validators:this.ValidateRePassword});

  ValidateRePassword(userForm:any)
  {
    let ControlPassword = userForm.get("password");
    let ControlRePassword = userForm.get("Repassword");

    if(ControlPassword?.value == ControlRePassword?.value)
    {return null;}
    else
    {
      ControlRePassword?.setErrors({RepasswordNotMathced :"Password and Repassword should be matched"})
      return {RepasswordNotMathced :"Password and Repassword should be matched"}
    }

  }


  formDone(e: Event) {
    e.preventDefault();
    if (this.userForm.status == 'VALID') {
      this.userService.addUser(this.userForm.value).subscribe((response) => {
        console.log(response);
      });
      this.router.navigate(['/Login']);
    } else {
      alert('Error Try Again');
    }
  }
}
