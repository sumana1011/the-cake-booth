import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{first} from 'rxjs/operators';
import { Router } from '@angular/router';

import { AlertService} from 'src/app/services/alert.service'
import {  UserService } from 'src/app/services/user.service';
import {  AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signin-app',
  templateUrl: './signin-app.component.html',
  styleUrls: ['./signin-app.component.css'],
})
export class SigninAppComponent implements OnInit {
  formVar : FormGroup;
  loading= false;
  submitted= false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    this.formVar = this.fb.group({
      salutation: '',
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      pwd: ['', [Validators.required, Validators.maxLength(8)]],
      dob: '',
    });
  }

  get f() { return this.formVar.controls; }

  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.formVar.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.formVar.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    console.log("resgistration successful");
                    this.router.navigate(['']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    

    // var data = this.formVar.value;
    // console.log(data);
    // var name = data.radAnswer + ' ' + data.fname + ' ' + data.lname;
    // var successMessage = `Congratulations,Your account creation was successful!<br/><br/> Welcome, ${name}!`;
    // document.getElementById('SuccessMessageDiv').innerHTML = successMessage;
    // var blank = '';
    // document.getElementById('signupForm').innerHTML = blank;
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
    //document.getElementById('prodlistdiv').innerHTML = blank;
  }

  
}
