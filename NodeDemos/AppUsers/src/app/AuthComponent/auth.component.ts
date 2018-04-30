import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators , NgModel} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserdataService } from '../shared/services/userData.service';
import { Errors } from '../shared/models/Errors';
import { UserData } from '../shared/models/UserData';



@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  authForm: FormGroup;
  auth : UserData;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserdataService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email':  [null,[ Validators.required,Validators.minLength(4),Validators.email]]
      ,'password': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
      }
      if(this.authType=="logOut"){
        this.userService.purgeAuth();
        this.router.navigateByUrl('/');
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;
    if(this.authType=="login")
    {
      if(this.userService.attemptAuth(this.authType, credentials)>=0){
        this.router.navigateByUrl('/Owner');
      }
      else{
      this.authForm.controls["email"].setErrors({invalid: true});
      }
    }
    if(this.authType=="register")
    {
      this.userService.populate({userName:credentials.userName,token:'',date:Date(),password:credentials.password,userID:20});
      this.router.navigateByUrl('/Owner');
    }
  }
}
