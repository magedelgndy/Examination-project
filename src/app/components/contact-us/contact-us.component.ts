import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  showError: boolean = false;
  constructor(private formBuilder: FormBuilder,private _router:Router) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  ngOnInit() { };


  onSubmit() {

    if(this.contactForm.valid)
    {
      this._router.navigate(['/']);
      this.showError = true;
    }

  }
}
