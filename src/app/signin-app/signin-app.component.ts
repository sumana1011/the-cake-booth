import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signin-app',
  templateUrl: './signin-app.component.html',
  styleUrls: ['./signin-app.component.css']
})
export class SigninAppComponent implements OnInit {
  formVar: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formVar = this.fb.group({
      radAnswer:'',
      fname:'',
      lname:'',
      email:'',
      pwd:'',
      dob:''
    });
  }
  onSubmit() {
    var data=this.formVar.value;
    console.log(data);
    var name=data.radAnswer+" "+data.fname+" "+data.lname;
    var successMessage= `Congratulations,Your account creation was successful!<br/><br/> Welcome, ${name}!`;
    document.getElementById('SuccessMessageDiv').innerHTML=successMessage;
    var blank='';
    document.getElementById('signupForm').innerHTML=blank;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.getElementById('prodlistdiv').innerHTML = blank;
  }
  

  ngOnInit(): void {
  }

}
