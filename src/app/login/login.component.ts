import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import { Admin } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup
  newUserForm: FormGroup

  new_admin: Admin = { email: "", password: "" }
  admin: Admin = { email: "", password: "" }
  constructor(private router: Router, private service: SharedService) {
    this.userForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
    })
    this.newUserForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required]),
      'confirm': new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  valid() {
    if (this.newUserForm.controls.confirm.value == this.newUserForm.controls.password.value) {
      return true
    }
    else {
      return false
    }
  }

  submitNewUser() {
    Object.keys(this.newUserForm.controls).forEach(field => {
      const control = this.newUserForm.get(field);
      if (field == "email") {
        this.new_admin.email = control?.value
      }
      if (field == "password") {
        this.new_admin.password = control?.value
      }
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.newUserForm.valid) {
      console.log(this.newUserForm.value);
      this.service.addUser(this.newUserForm.value).subscribe(() => {
      }, () => {
        alert("Something Went Wrong")
      })
    }

    this.newUserForm.reset()
  }

  submitUser() {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (field == "email") {
        this.admin.email = control?.value
      }
      if (field == "password") {
        this.admin.password = control?.value
      }
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if (this.userForm.valid) {
      this.service.getAllUsers().subscribe((data) => {
        let i = 0
        for (i = 0; i < data.length; i++) {
          if ((this.admin.email == data[i].email) && (this.admin.password == data[i].password)) {
            this.router.navigate(['/dashboard'])
            break;
          }
          else {
            if (i == data.length - 1)
              alert("Either wrong email or password")
          }
        }

      })

    }
  }
}
